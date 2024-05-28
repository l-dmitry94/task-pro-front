import Logo from './Logo';
import CreateBoard from './CreateBoard';
import Boards from './Boards';
import NeedHelp from './NeedHelp';
import Logout from './Logout';

import scss from './Sidebar.module.scss';

const Sidebar = ({ active, setActive }) => {
    return (
        <aside
            className={active ? `${scss.sidebar} ${scss.active}` : scss.sidebar}
            onClick={setActive}
        >
            <div className={scss.overlay}></div>

            <div
                className={scss.sidebarContent}
                onClick={(e) => e.stopPropagation()}
            >
                <div>
                    <div className={scss.container}>
                        <Logo />
                        <CreateBoard />
                    </div>

                    <Boards />
                </div>

                <div className={scss.container}>
                    <NeedHelp />
                    <Logout />
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
