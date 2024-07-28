import React, { useState, useEffect } from "react";
import SortableTree from "react-sortable-tree";
import { buildTree } from "../utils";
import "./tree.scss";
import "react-sortable-tree/style.css";

const Tree = ({ ctx }) => {
    const [tree, setTree] = useState([buildTree(ctx)]);
    useEffect(() => {
        setTree([buildTree(ctx)]);
    }, [ctx]);
    return (
        <div className="tree">
            <SortableTree
                treeData={tree}
                onChange={t => setTree(t)}
                canDrag={false}
                canDrop={() => false}
                generateNodeProps={rowInfo => ({
                    buttons: [<div>{rowInfo.node.name}</div>]
                })}
            />
        </div>
    );
};

export default Tree;
