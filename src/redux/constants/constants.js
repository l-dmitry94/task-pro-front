import { toast } from 'react-toastify';

export const pending = (state) => {
    state.toastId = toast.loading('Please wait...');
};

export const rejected = (state, action) => {
    if (state.toastId) {
        toast.update(state.toastId, {
            render: action.payload,
            type: 'error',
            isLoading: false,
            autoClose: 2000,
            closeOnClick: true,
        });
    }
};
