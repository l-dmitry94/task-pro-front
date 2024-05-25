import * as yup from 'yup';

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

export default validationSchema;
