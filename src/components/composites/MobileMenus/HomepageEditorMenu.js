import Dropdowns from "../../elements/Dropdowns";
import CommonButton from '../../elements/Buttons/CommonButton';
import { FaCaretDown, FaCaretUp, FaTimes } from 'react-icons/fa';
import { routes } from '../../../routes';
import ExamplesMenu from '../ExamplesMenu';


const HomepageWithEditorMenu = ({ isMenuShowing, onDismiss, isExampleMenuShowing, setIsExampleMenuShowing }) => {
    return (
        <div className={`${!!isMenuShowing ? 'd-flex' : 'd-none'} mobile-menu`}>
            <div className={`content`}>
                <div className={`d-flex flex-row justify-content-end pr-2 pt-3 pb-4`}>
                    <FaTimes onClick={() => onDismiss()} />
                </div>
                <div className={`content-wrapper px-3`}>
                    <div className={`divide`}>
                        <CommonButton as={'a'} href={routes.documentation} title={`DOCUMENTATION`} classes={`small`} />
                    </div>
                    <div className={`divide`}>
                        <CommonButton
                            title={`EXAMPLES`} classes={`small d-flex align-items-center`}
                            append={!!isExampleMenuShowing == true ? <FaCaretUp className={`ml-1`} /> : <FaCaretDown className={`ml-1`} />}
                            onClick={() => setIsExampleMenuShowing(!isExampleMenuShowing)}
                        />
                    </div>
                </div>
                <ExamplesMenu classes={`mobile-menu-example-menu`} mobileView={true} show={isExampleMenuShowing} dismissButton={true} onDismiss={() => setIsExampleMenuShowing(!isExampleMenuShowing)} />
            </div>
        </div>
    );
};


export default HomepageWithEditorMenu;