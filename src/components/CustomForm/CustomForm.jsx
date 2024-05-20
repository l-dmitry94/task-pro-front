import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import CustomButton from 'components/CustomButton';

const CustomForm = ({ defaultValues, schema, buttonText, children }) => {
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
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {children({ register, errors })}

            <CustomButton type="submit" text={buttonText} />
        </form>
    );
};

export default CustomForm;
