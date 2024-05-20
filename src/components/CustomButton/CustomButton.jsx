import { icons } from 'assets/icons';

import scss from './CustomButton.module.scss';

const CustomButton = ({ type, text }) => {
    switch (text) {
        case 'Register Now':
        case 'Log In Now':
        case 'Send':
            return (
                <button type={type} className={scss.buttonDefault}>
                    {text}
                </button>
            );
        default:
            return (
                <button type={type} className={scss.button}>
                    <div className={scss.iconWrapper}>
                        <svg className={scss.icon}>
                            <use href={`${icons}#icon-plus`}></use>
                        </svg>
                    </div>
                    {text}
                </button>
            );
    }
};

export default CustomButton;
