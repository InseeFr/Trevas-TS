import React, { useState } from 'react';
import SortableTree from 'react-sortable-tree';
import { buildTree } from '../../utils';
import 'react-sortable-tree/style.css';

const Tree = ({ ctx }) => {
	const [tree, setTree] = useState([buildTree(ctx)]);
	return (
		<SortableTree
			treeData={tree}
			onChange={t => setTree(t)}
			canDrag={false}
			canDrop={() => false}
			generateNodeProps={rowInfo => ({
				buttons: [<div>{rowInfo.node.name}</div>],
			})}
		/>
	);
};

export default Tree;
