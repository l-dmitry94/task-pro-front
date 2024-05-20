import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import * as yup from 'yup';

import Container from 'components/Container';
import CustomForm from 'components/CustomForm';
import CustomInput from 'components/CustomInput';

import scss from './RegisterForm.module.scss';
import { signup } from '../../../redux/auth/auth-operations';

const RegisterForm = () => {
    const [isShowPassword, setIsShowPassword] = useState(false);

    const defaultValues = {
        name: '',
        email: '',
        password: '',
    };
    const validationSchema = yup.object({
        name: yup.string().required('Name is required'),
        email: yup
            .string()
            .required('Email is required')
            .matches(/^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Email is not valid'),
        password: yup
            .string()
            .required('Password is required')
            .matches(
                /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
                'Password is not valid (Example: Qwerty123)'
            ),
    });
    return (
        <section className={scss.section}>
            <Container>
                <div className={scss.wrapper}>
                    <ul className={scss.controlList}>
                        <li>
                            <NavLink
                                to="/auth/register"
                                className={scss.controlLink}
                            >
                                Registration
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/auth/login"
                                className={scss.controlLink}
                            >
                                Log In
                            </NavLink>
                        </li>
                    </ul>

                    <CustomForm
                        defaultValues={defaultValues}
                        schema={validationSchema}
                        operation={signup}
                        buttonText="Register Now"
                    >
                        {({ register, errors }) => (
                            <div className={scss.formWrapper}>
                                <CustomInput
                                    type="text"
                                    name="name"
                                    placeholder="Enter your name"
                                    register={register}
                                    errors={errors}
                                />
                                <CustomInput
                                    type="text"
                                    placeholder="Enter your email"
                                    name="email"
                                    register={register}
                                    errors={errors}
                                />
                                <CustomInput
                                    type={isShowPassword ? 'text' : 'password'}
                                    name="password"
                                    onClick={() =>
                                        setIsShowPassword(!isShowPassword)
                                    }
                                    placeholder="Create a password"
                                    register={register}
                                    errors={errors}
                                />
                            </div>
                        )}
                    </CustomForm>
                </div>
            </Container>
        </section>
    );
};

export default RegisterForm;
