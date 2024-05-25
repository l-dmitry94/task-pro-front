import { useState } from 'react';

import Container from 'components/Container';
import Control from '../Control';
import CustomForm from 'components/CustomForm';
import CustomInput from 'components/CustomInput';

import validationSchema from './validationSchema';
import { signup } from '../../../redux/auth/auth-operations';

import scss from './RegisterForm.module.scss';

const RegisterForm = () => {
    const [isShowPassword, setIsShowPassword] = useState(false);

    const defaultValues = {
        name: '',
        email: '',
        password: '',
    };

    return (
        <section className={scss.section}>
            <Container>
                <div className={scss.wrapper}>
                    <Control />

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
