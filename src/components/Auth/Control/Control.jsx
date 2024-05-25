import { NavLink } from 'react-router-dom';

import scss from './Control.module.scss';

const Control = () => {
    return (
        <ul className={scss.controlList}>
            <li>
                <NavLink to="/auth/register" className={scss.controlLink}>
                    Registration
                </NavLink>
            </li>
            <li>
                <NavLink to="/auth/login" className={scss.controlLink}>
                    Log In
                </NavLink>
            </li>
        </ul>
    );
};

export default Control;
