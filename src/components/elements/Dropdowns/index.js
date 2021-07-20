import { FaTimes } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";


export default ({ children, content, show, dismissButton, classes, onDismiss }) => {
    return (
        <aside className={`${!!show ? 'd-block' : 'd-none'} cx_dropdown ${classes}`}>
            {
                dismissButton &&
                <div className={`d-flex flex-row justify-content-end pt-2 pb-1 px-2 border-bottom border-bottom-muted`}>
                    <AiFillCloseCircle 
                        onClick={() => onDismiss()}
                        className={`dismiss-btn`}
                    />
                </div>
            }
            <div className={`px-2 py-1 small`}>
                { content ?? children }
            </div>
        </aside>
    );
};