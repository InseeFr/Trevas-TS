import React, {
	useContext,
	useEffect,
	useState,
	useRef,
	createRef,
} from 'react';
import PropTypes from 'prop-types';
import createKeydownCallback from '../editor-keydown-callback';
import * as actions from '../editor-actions';
import Cursor from './cursor.component';
import {
	getSelectionBlocs,
	getCursorLeft,
	getCursorPosition,
} from '../common-tools';
import EditorContext from './editor-context';

let cleanListeners;

const cleanUp = () => {
	if (cleanListeners) {
		cleanListeners();
		cleanListeners = undefined;
	}
};

/* à améliorer */
const listenOnDocument = ({ editorEl }) => ({
	goUp,
	goDown,
	setSelectionStart,
}) => {
	let interval = null;
	/* */
	const mouseMoveOnWindow = e => {
		const { clientY } = e;
		const rect = editorEl.getBoundingClientRect();

		if (clientY < rect.top && !interval) {
			interval = window.setInterval(() => goUp(), 80);
		} else if (clientY > rect.top + rect.height && !interval) {
			interval = window.setInterval(() => goDown(), 80);
		}
	};
	/* */
	const mouseUpOnWindow = () => {
		setSelectionStart(false);
		document.removeEventListener('mousemove', mouseMoveOnWindow);
		document.removeEventListener('mouseup', mouseUpOnWindow);
		window.clearInterval(interval);
		interval = undefined;
	};

	document.addEventListener('mousemove', mouseMoveOnWindow);
	document.addEventListener('mouseup', mouseUpOnWindow);

	return () => {
		document.removeEventListener('mousemove', mouseMoveOnWindow);
		document.removeEventListener('mouseup', mouseUpOnWindow);
		window.clearInterval(interval);
		interval = undefined;
	};
};

/* */
const Overlay = ({ chasse }) => {
	const state = useContext(EditorContext);
	const {
		selection,
		lines,
		index,
		focusedRow,
		rowHeight,
		scrollRange,
		horizontalRange,
		shortcutPatterns,
		dispatch,
	} = state;
	const divEl = useRef(null);
	const [anchor, setAnchor] = useState(undefined);
	const [extent, setExtent] = useState(undefined);
	const [cursorPosition, setCursorPosition] = useState(undefined);
	const [selectionStart, setSelectionStart] = useState(false);
	const [move, setMove] = useState(0);

	useEffect(() => {
		dispatch(actions.initCharSize(chasse));
	}, [chasse]);

	useEffect(() => {
		const screenRow = focusedRow - scrollRange.start;
		const top = rowHeight * screenRow;
		const left = getCursorLeft(chasse)(index - horizontalRange.start);
		setCursorPosition({ top, left });
	}, [
		index,
		chasse,
		focusedRow,
		scrollRange.start,
		rowHeight,
		horizontalRange.start,
	]);

	useEffect(() => {
		if (move !== 0) {
			const nx = {
				...extent,
				row: Math.min(Math.max(0, extent.row + move), lines.length - 1),
			};
			setExtent(nx);
			dispatch(actions.setSelection({ anchor, extent: nx }));
			setMove(0);
		}
	}, [move, extent]);

	// useEffect(
	// 	() => () => {
	// 		if (cleanListeners) {
	// 			cleanListeners();
	// 			cleanListeners = undefined;
	// 		}
	// 	},
	// 	[]
	// );

	const callbackKeyDown = createKeydownCallback(
		dispatch,
		state,
		shortcutPatterns
	);

	if (divEl.current) {
		divEl.current.addEventListener(
			'wheel',
			e => {
				e.preventDefault();
				e.stopImmediatePropagation();
				if (e.deltaY > 0) {
					dispatch(actions.scrollDown());
				} else if (e.deltaY < 0) {
					dispatch(actions.scrollUp());
				}
			},
			{ active: false }
		);
	}
	return (
		<div
			ref={divEl}
			tabIndex="0"
			role="presentation"
			className="vtl-overlay"
			onKeyDown={callbackKeyDown}
			onMouseEnter={e => {
				e.target.focus();
				setMove(0);
				if (cleanListeners) {
					cleanListeners();
					cleanListeners = undefined;
				}
			}}
			onDoubleClick={e => {
				e.stopPropagation();
				dispatch(actions.selectTokenOnCursor());
			}}
			onMouseDown={e => {
				e.stopPropagation();
				setSelectionStart(true);
				const { newFocusedRow, newIndex } = getCursorPosition(e, divEl)(state);
				setAnchor({ row: newFocusedRow, index: newIndex });
				setExtent(undefined);
				dispatch(actions.setCursorPosition(newFocusedRow, newIndex));
				dispatch(actions.setSelection(undefined));
			}}
			onMouseLeave={() => {
				if (selectionStart) {
					cleanListeners = listenOnDocument(state)({
						setSelectionStart,
						goUp: () => setMove(-1),
						goDown: () => setMove(1),
					});
				}
			}}
			onMouseUp={e => {
				e.stopPropagation();
				setSelectionStart(false);
				if (
					!extent ||
					(extent && anchor.row === extent.row && anchor.index === extent.index)
				) {
					dispatch(actions.setSelection(undefined));
				}
				setAnchor(undefined);
				setExtent(undefined);
			}}
			onMouseMove={e => {
				if (selectionStart) {
					const { newFocusedRow, newIndex } = getCursorPosition(e, divEl)(
						state
					);
					if (anchor.row === undefined) {
						const row =
							scrollRange.start +
							Math.min(scrollRange.offset, lines.length) -
							1;
						setAnchor({ row, index: lines[row].value.length });
					}
					if (newFocusedRow >= 0 && newIndex >= 0) {
						setExtent({ row: newFocusedRow, index: newIndex });
						dispatch(actions.setCursorPosition(newFocusedRow, newIndex));
						if (anchor.row !== newFocusedRow || anchor.index !== newIndex) {
							const ne = anchor && extent ? { anchor, extent } : undefined;
							dispatch(actions.setSelection(ne));
						}
					}
				}
			}}
		>
			{cursorPosition ? (
				<Cursor left={cursorPosition.left} top={cursorPosition.top} />
			) : null}
			{selection
				? getSelectionBlocs(state).map(({ top, left, width }, i) => (
						<span
							key={i}
							className="vtl-bloc-selection"
							style={{ top, left, width: width === 0 ? 5 : width }}
						/>
				  ))
				: null}
		</div>
	);
};

const hoc = Component => props => {
	const [chasse, setChasse] = useState(undefined);
	const divEl = createRef(null);
	useEffect(() => {
		if (divEl.current) {
			const rect = divEl.current.getBoundingClientRect();
			setChasse(rect.width);
		}
	}, [chasse, divEl]);

	return !chasse ? (
		<div className="vtl-editor" aria-hidden="true">
			<div className="vtl-row">
				<span ref={divEl} className="vtl-token">
					M
				</span>
			</div>
		</div>
	) : (
		<Component {...props} chasse={chasse} />
	);
};

Overlay.propTypes = { chasse: PropTypes.number };

Overlay.defaultProps = { chasse: 0 };

export default hoc(Overlay);
