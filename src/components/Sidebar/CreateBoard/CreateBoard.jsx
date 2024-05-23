import { icons } from 'assets/icons';

import scss from './CreateBoard.module.scss';

const CreateBoard = () => {
    return (
        <section className={scss.section}>
            <p className={scss.text}>My boards</p>

            <button className={scss.button}>
                <p className={scss.buttonText}>Create a new board</p>
                <div className={scss.wrapperIcon}>
                    <svg className={scss.icon}>
                        <use href={`${icons}#icon-plus`}></use>
                    </svg>
                </div>
            </button>
        </section>
    );
};

export default CreateBoard;
