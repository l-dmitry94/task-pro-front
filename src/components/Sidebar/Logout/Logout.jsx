import { useDispatch } from 'react-redux';

import { icons } from 'assets/icons';
import { logout } from '../../../redux/auth/auth-operations';

import scss from './Logout.module.scss';

const Logout = () => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());

        localStorage.removeItem('ACTIVE_BOARD');
    };

    return (
        <button className={scss.button} onClick={handleLogout}>
            <svg className={scss.icon}>
                <use href={`${icons}#icon-logout`}></use>
            </svg>
            Log out
        </button>
    );
};

export default Logout;
