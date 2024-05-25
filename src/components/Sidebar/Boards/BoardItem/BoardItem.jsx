import { NavLink } from 'react-router-dom';
import scss from './BoardItem.module.scss';
import { icons } from 'assets/icons';

const BoardItem = ({ icon, title }) => {
    const addToLocalStorage = () => {
        localStorage.setItem('ACTIVE_BOARD', title);
    };
    return (
        <li>
            <NavLink
                to={`/home/${title}`}
                className={scss.link}
                onClick={addToLocalStorage}
            >
                <div className={scss.info}>
                    <svg className={scss.infoIcon}>
                        <use href={`${icons}#${icon}`}></use>
                    </svg>
                    <p className={scss.title} title={title}>
                        {title}
                    </p>
                </div>

                <ul className={scss.controlList}>
                    <li>
                        <button className={scss.controlButton}>
                            <svg className={scss.controlIcon}>
                                <use href={`${icons}#icon-pencil`}></use>
                            </svg>
                        </button>
                    </li>
                    <li>
                        <button className={scss.controlButton}>
                            <svg className={scss.controlIcon}>
                                <use href={`${icons}#icon-trash`}></use>
                            </svg>
                        </button>
                    </li>
                </ul>
            </NavLink>
        </li>
    );
};

export default BoardItem;
