import { useEffect, useState } from "react";
import { AntlrEditor } from "@making-sense/antlr-editor";
import * as VTLTools from "@making-sense/vtl-2-0-antlr-tools-ts";
import * as JSONTools from "json-antlr-tools-ts";
import { getSuggestionsFromRange, monarchDefinition } from "@making-sense/vtl-2-0-monaco-tools-ts";
import interpret from "../../interpretor";
import { buildVtlBindings, buildJSONBindings } from "./ds";
import "./ui.css";

const customVTLTools = { ...VTLTools, initialRule: "expr", getSuggestionsFromRange, monarchDefinition };

const UI = ({ inputScript = "", inputBindings = {} }) => {
    const [script, setScript] = useState<string>(inputScript);
    const [hasScriptError, setHasScriptError] = useState<boolean>(false);
    const [bindings, setBindings] = useState<string>(JSON.stringify(inputBindings, null, 2));
    const [hasBindingsError, setHasBindingsError] = useState<boolean>(false);
    const [result, setResult] = useState<string>("");
    const [error, setError] = useState(null);

    const updateScript = (s: string): void => {
        result && setResult("");
        setScript(s);
    };

    const updateBindings = (b: string): void => {
        result && setResult("");
        setBindings(b);
    };

    const getResult = () => {
        try {
            const vtlBindings = buildVtlBindings(JSON.parse(bindings));
            const res = interpret(script, vtlBindings);
            setError(null);
            if (typeof res === "object") {
                setResult(JSON.stringify(buildJSONBindings(res), null, 2));
            } else {
                setResult(res);
            }
        } catch (e: any) {
            console.warn(e.stack);
            setResult("");
            setError(e.message);
        }
    };

    useEffect(() => {
        setScript(inputScript);
        setBindings(JSON.stringify(inputBindings, null, 2));
    }, [inputScript, inputBindings]);

    return (
        <>
            <div className="editors">
                <div className="vtl-editor">
                    <h2 className="centered">VTL expression</h2>
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
                {error && <div className="res-error">{error}</div>}
            </div>
        </>
    );
};

export default UI;
