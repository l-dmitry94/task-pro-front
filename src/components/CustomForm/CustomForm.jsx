import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import CustomButton from 'components/CustomButton';
import { useDispatch } from 'react-redux';

const CustomForm = ({
    defaultValues,
    schema,
    operation,
    buttonText,
    children,
}) => {
    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues,
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        console.log(data);
        dispatch(operation(data));
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {children({ register, errors })}

            <CustomButton type="submit" text={buttonText} />
        </form>
    );
};

export default CustomForm;
