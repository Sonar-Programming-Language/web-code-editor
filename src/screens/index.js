import CodeEditor from "../components/composites/CodeEditor";


const Homepage = (props) => {
    return (
        <>
            <div className={`cx_scrollbar h-screen-minus-navbar row pos-normal homepage cx_bgdark px-auto`}>
                <div className={`col-12 h-full m-0`}>
                    <CodeEditor />
                </div>
            </div>
        </>
    );

};


export default Homepage;