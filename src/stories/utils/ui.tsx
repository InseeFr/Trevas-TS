import { AntlrEditor } from "@making-sense/antlr-editor";
import * as VTLTools from "@making-sense/vtl-2-0-antlr-tools-ts";
import * as JSONTools from "json-antlr-tools-ts";
import { getSuggestionsFromRange, monarchDefinition } from "@making-sense/vtl-2-0-monaco-tools-ts";
import { useState } from "react";
import "./ui.css";
import interpret from "../../interpretor";

const customVTLTools = { ...VTLTools, initialRule: "expr", getSuggestionsFromRange, monarchDefinition };

const UI = ({ inputScript = "", inputBindings = "{}" }) => {
    const [script, setScript] = useState<string>(inputScript);
    const [hasScriptError, setHasScriptError] = useState<boolean>(false);
    const [bindings, setBindings] = useState<string>(inputBindings);
    const [hasBindingsError, setHasBindingsError] = useState<boolean>(false);
    const [result, setResult] = useState<string>("");

    const updateScript = (s: string): void => {
        result && setResult("");
        setScript(s);
    };

    const updateBindings = (b: string): void => {
        result && setResult("");
        setBindings(b);
    };

    const getResult = () => {
        setResult(JSON.stringify(interpret(script, JSON.parse(bindings))));
    };

    return (
        <>
            <div className="editors">
                <div className="vtl-editor">
                    <h2 className="centered">VTL script</h2>
                    <AntlrEditor
                        tools={customVTLTools}
                        script={script}
                        setScript={updateScript}
                        onListErrors={e => {
                            setHasScriptError(e.length > 0);
                        }}
                        height="30vh"
                        options={{ minimap: { enabled: true }, readOnly: false }}
                    />
                </div>
                <div className="json-editor">
                    <h2 className="centered">Bindings</h2>
                    <AntlrEditor
                        tools={JSONTools}
                        script={bindings}
                        setScript={updateBindings}
                        onListErrors={e => {
                            setHasBindingsError(e.length > 0);
                        }}
                        height="30vh"
                        options={{ minimap: { enabled: false }, readOnly: false, lineNumbers: "off" }}
                    />
                </div>
            </div>
            <div className="res-btn-container">
                <button
                    className="res-btn"
                    onClick={getResult}
                    disabled={hasScriptError || hasBindingsError}
                >
                    Get result
                </button>
                {result && (
                    <>
                        <h2>Result</h2>
                        <AntlrEditor
                            tools={JSONTools}
                            script={result}
                            height="30vh"
                            options={{ minimap: { enabled: false }, readOnly: true, lineNumbers: "off" }}
                        />
                    </>
                )}
            </div>
        </>
    );
};

export default UI;
