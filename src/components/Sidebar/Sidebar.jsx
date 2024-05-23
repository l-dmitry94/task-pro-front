import Logo from './Logo';
import CreateBoard from './CreateBoard';
import Boards from './Boards';
import NeedHelp from './NeedHelp';
import Logout from './Logout';

import scss from './Sidebar.module.scss';

const Sidebar = () => {
    return (
        <aside className={scss.sidebar}>
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
        </aside>
    );
};

export default Sidebar;
