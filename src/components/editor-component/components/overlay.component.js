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
import { getSelectionBlocs, getCursorLeft, getCursorPosition } from './tools';
import EditorContext from './editor-context';

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
			{ active: true }
		);
	}

	return (
		<div
			ref={divEl}
			tabIndex="0"
			role="presentation"
			className="front-editor"
			onKeyDown={callbackKeyDown}
			onMouseEnter={e => {
				e.target.focus();
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
			onMouseLeave={() => setSelectionStart(false)}
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
							const ne = { row: newFocusedRow, index: newIndex };
							const next =
								anchor.row > newFocusedRow ||
								(anchor.row === newFocusedRow && anchor.index > newIndex)
									? { start: { ...ne }, stop: { ...anchor } }
									: { start: { ...anchor }, stop: { ...ne } };
							dispatch(actions.setSelection(next));
						}
					}
				}
			}}
		>
			{cursorPosition ? (
				<Cursor left={cursorPosition.left} top={cursorPosition.top} />
			) : null}
			{selection
				? getSelectionBlocs()(state).map(({ top, left, width }, i) => (
						<span
							key={i}
							className="bloc-selection"
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
		<div className="editor" aria-hidden="true">
			<div className="row">
				<span ref={divEl} className="token">
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
