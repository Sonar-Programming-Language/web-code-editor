const Sidebar = ({ children, header }) => {
    return (
        <div className={`cx_sidebar cx_scrollbar col-12 py-1`}>
            <div>
                { header }
            </div>
            { children }
        </div>
    );
};


export const ExamplesSidebar = (props) => {
    return (
        <Sidebar header={`Examples`}>

        </Sidebar>
    );
};


export default Sidebar;