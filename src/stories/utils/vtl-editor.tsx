import { AntlrEditor } from "@making-sense/antlr-editor";
import * as VTLTools from "@making-sense/vtl-2-0-antlr-tools-ts";
import { getSuggestionsFromRange, monarchDefinition } from "@making-sense/vtl-2-0-monaco-tools-ts";

const customTools = { ...VTLTools, getSuggestionsFromRange, monarchDefinition };

const VTLEditor = () => {
    return <AntlrEditor tools={customTools} />;
};

export default VTLEditor;
