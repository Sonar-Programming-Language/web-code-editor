import { useState } from 'react';
import { routes } from '../../../routes';
import CommonButton from '../../elements/Buttons/CommonButton';
import { FaBars, FaCaretDown, FaCaretUp } from 'react-icons/fa';
import ExamplesMenu from '../ExamplesMenu';
import HomepageWithEditorMenu from '../MobileMenus/HomepageEditorMenu';

const Navbar = (props) => {
    const [isExampleMenuShowing, setIsExampleMenuShowing] = useState(false);
    const [isMenuShowing, setIsMenuShowing] = useState(false);


    return (
        <>
            <nav className={`col-12 m-0 py-2 cx_navbar mb-3 d-flex flex-row justify-content-between`}>
                <div className={`small cx_textmuted`}>
                    PROGRAMMING<br className={`d-none d-md-block`} />
                    <span className={`ml-md-4 ml-1`}>LANGUAGE 2</span>
                </div>
                <div className={`d-md-flex d-none flex-row align-items-center`}>
                    <CommonButton as={'a'} href={routes.documentation} title={`DOCUMENTATION`} classes={`small`} />
                    <CommonButton
                        title={`EXAMPLES`} classes={`small d-flex align-items-center`}
                        append={!!isExampleMenuShowing == true ? <FaCaretUp className={`ml-1`} /> : <FaCaretDown className={`ml-1`} />}
                        onClick={() => setIsExampleMenuShowing(!isExampleMenuShowing)}
                    />
                </div>
                <div className={``}>
                    <FaBars onClick={() => setIsMenuShowing(true)} />
                </div>
                <ExamplesMenu show={isExampleMenuShowing} dismissButton={true} onDismiss={() => setIsExampleMenuShowing(!isExampleMenuShowing)} />
            </nav>
            <HomepageWithEditorMenu onDismiss={() => setIsMenuShowing(!isMenuShowing)} isMenuShowing={isMenuShowing} isExampleMenuShowing={isExampleMenuShowing} setIsExampleMenuShowing={setIsExampleMenuShowing} />
        </>
    );
};


export default Navbar;