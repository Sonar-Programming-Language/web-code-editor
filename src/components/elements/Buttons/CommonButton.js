import { useEffect, useState } from "react";


export default ({ children, title, classes, onClick, as, href, prepend, append }) => {
    const [jsxElementToRender, setJsxElementToRender] = useState(
        <button
            className={`small cx_textmuted cx_btn_link mx-1 ${classes}`}
            onClick={e => onClick ? onClick(e) : null}
        >
            {prepend}{ title || children }{append}
        </button>
        );


    useEffect(() => {
        if (as !== undefined) {
            setJsxElementToRender(determineElementToRender());
        }
    }, []);

    const determineElementToRender = () => {
        switch(as.toLowerCase()) {
            case 'a':
                return (
                    <a
                        className={`small cx_textmuted cx_btn_link mx-1 ${classes}`}
                        href={href || null}
                    >
                        {prepend}{ title || children }{append}
                    </a>
                );
            case 'button':
                return (
                    <button
                        className={`small cx_textmuted cx_btn_link mx-1 ${classes}`}
                        onClick={e => onClick ? onClick(e) : null}
                    >
                        {prepend}{ title || children }{append}
                    </button>
                );
            default:
                return <>UNKNOWN 'AS' PROP</>;
        };
    };

    return (jsxElementToRender);
}