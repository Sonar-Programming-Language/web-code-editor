import React, { useState, useContext, useEffect, useRef } from 'react';

import { Controlled as CodeMirror } from 'react-codemirror2';
import { AppContext } from '../../../context';
import CommonButton from '../../elements/Buttons/CommonButton';
import { FaPlay, FaTrash } from 'react-icons/fa';


require('codemirror/lib/codemirror.css');
require('codemirror/theme/dracula.css');
require('codemirror/theme/neat.css');
require('codemirror/mode/xml/xml.js');
require('codemirror/mode/javascript/javascript.js');


const CodeEditor = (props) => {
    const [editorText, setEditorText] = useState({ value: '' });

    const [logs, setLogs] = useState('');

    const [isRunning, setIsRunning] = useState(false);

    const [editorHeight, setEditorHeight] = useState('86vh');

    const context = useContext(AppContext);

    const codeMirrorRef = useRef();


    useEffect(() => returnLastLog(), [context.logs]);
    useEffect(() => setEditorText({ ...editorText, value: context.code }), [context.code]);
    useEffect(() => codeMirrorRef.current.editor.display.wrapper.style.height = editorHeight, []);
    useEffect(() => {
        setEditorText({ ...editorText, value: context.code });
    }, [context.code.length]);


    const handleRunCode = (duration = 800) => {
        simulateIsRunning(duration);
        context.executeProgram();
    };

    const simulateIsRunning = (duration = 800) => {
        setIsRunning(true);
        setTimeout(() => setIsRunning(false), duration);
    };

    const handleBeforeChange = (editor, data, value) => {
        setEditorText({value});
        updateContextCodeEditorValue(value);
    };

    const updateContextCodeEditorValue = value => context.updateContext({
        ...context, code: value
    });

    const handleChange = (editor, data, value) => null;
    // const handleChange = (editor, data, value) => updateContextCodeEditorValue(value);

    const returnLastLog = () => {
        const logs = context.logs;
        let temp = [];
        if (logs.length > 0) {
            logs.forEach(log => {
                if (log.error) temp.push(<div className={`small`} style={{ color: context.codeEditor.colors.errors }}>&gt; { log.error.message }</div>);
                if (log.log) temp.push(<div className={`small`} style={{ color: context.codeEditor.colors.success }}>&gt; { log.log }</div>);
                // temp.push(<br />);
            });
            setLogs(temp);
        } else {
            setLogs(``);
        }
    };

    return (
        <div className={`col-12 row py-2 px-3 m-0 cx_bgdark`}>
            <div className={`col-12 col-md-6 m-0 cx_border-all cx_scrollbar`}>
                <CodeMirror
                    ref={codeMirrorRef}
                    value={context.code}
                    options={{
                        mode: 'javascript',
                        // theme: 'codemirror',
                        theme: 'dracula',
                        lineNumbers: true,
                        autocorrect: true,
                    }}
                    onBeforeChange={(editor, data, value) => handleBeforeChange(editor, data, value)}
                    onChange={(editor, data, value) => handleChange(editor, data, value)}
                    onDblClick={(editor, e) => handleRunCode()}
                    className={'cx_codeeditor cx_bgdark'}
                    styleSelected={true}
                />
            </div>
            <div className={`text-white cx_border-all cx_bgdark col-12 col-md-6 m-0 cx_logs cx_scrollbar py-3 px-2 cx_overflow_y_scroll border-left-0`} style={{ height: editorHeight }}>
                <div
                    className={`cx_textmuted border-bottom pb-0 border-muted text-uppercase font-weight-bold small d-flex flex-row justify-content-between align-item-center`}
                    style={{
                        letterSpacing: 1.5
                    }}
                    >
                    <span>LOGS</span>
                    <div className={`d-flex flex-row pb-1`}>
                        <CommonButton title={`CLEAR`} onClick={() => setLogs('')} prepend={<span className={`mr-2`}><FaTrash size={12} /></span>} classes={`d-flex flex-row align-items-center`} />
                        <button
                            className={`small cx_textmuted cx_btn_link mx-1 d-flex flex-row align-items-center`}
                            onClick={() => handleRunCode()}
                        >
                            <FaPlay /><span className={`ml-2`}>{!!isRunning ? '...' : 'RUN'}</span>
                        </button>
                    </div>
                </div>
                <div className={`pt-2`} style={{ fontSize: 14 }}>
                    { logs }
                </div>
            </div>
        </div>
    );
};


export default CodeEditor;