import { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

import Logo from './Logo';
import CreateBoard from './CreateBoard';
import Boards from './Boards';
import NeedHelp from './NeedHelp';
import Logout from './Logout';

import scss from './Sidebar.module.scss';
import './Sidebar.scss';

const Sidebar = ({ inProp }) => {
    const nodeRef = useRef(null);

    return (
        <CSSTransition
            nodeRef={nodeRef}
            in={inProp}
            timeout={3000}
            classNames="my-node"
            unmountOnExit
        >
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
        </CSSTransition>
    );
};

export default Sidebar;
