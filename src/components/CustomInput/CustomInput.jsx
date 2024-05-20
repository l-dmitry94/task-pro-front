import { icons } from 'assets/icons';

import scss from './CustomInput.module.scss';

const CustomInput = ({
    type,
    name,
    placeholder,
    onClick,
    register,
    errors,
}) => {
    return (
        <div>
            <div className={scss.wrapper}>
                <input
                    className={scss.input}
                    type={type}
                    placeholder={placeholder}
                    {...register(name)}
                />
                {onClick && (
                    <svg className={scss.icon} onClick={onClick}>
                        <use href={`${icons}#icon-eye`}></use>
                    </svg>
                )}
            </div>

            {errors[name] && (
                <p className={scss.error}>{errors[name]?.message}</p>
            )}
        </div>
    );
};

export default CustomInput;
