import { useState } from 'react';

import Container from 'components/Container';
import Control from '../Control';
import CustomForm from 'components/CustomForm';
import CustomInput from 'components/CustomInput';

import validationSchema from './validationSchema';
import { signin } from '../../../redux/auth/auth-operations';

import scss from './LoginForm.module.scss';

const LoginForm = () => {
    const [isShowPassword, setIsShowPassword] = useState(false);

    const defaultValues = {
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
                        operation={signin}
                        buttonText="Log In Now"
                    >
                        {({ register, errors }) => (
                            <div className={scss.formWrapper}>
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
                                    placeholder="Create a password"
                                    onClick={() =>
                                        setIsShowPassword(!isShowPassword)
                                    }
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

export default LoginForm;
