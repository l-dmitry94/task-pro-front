import { Link } from 'react-router-dom';

import { icons } from 'assets/icons';

import scss from './Logo.module.scss';

const Logo = () => {
    return (
        <Link className={scss.link} to="/home">
            <div className={scss.wrapperIcon}>
                <svg className={scss.icon}>
                    <use href={`${icons}#icon-logo`}></use>
                </svg>
            </div>
            Task Pro
        </Link>
    );
};

export default Logo;
