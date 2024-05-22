import { createSlice } from '@reduxjs/toolkit';
import { current, logout, signin, signup } from './auth-operations';
import { pending, rejected } from '../constants/constants';
import { toast } from 'react-toastify';

const initialState = {
    user: {},
    token: '',
    isLogin: false,
    toastId: null,
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(signup.pending, pending)
            .addCase(signup.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLogin = true;
                if (state.toastId) {
                    toast.update(state.toastId, {
                        render: 'Signup successful',
                        type: 'success',
                        isLoading: false,
                        autoClose: 2000,
                        closeOnClick: true,
                    });
                }
            })
            .addCase(signup.rejected, rejected)

            .addCase(signin.pending, pending)
            .addCase(signin.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLogin = true;
                if (state.toastId) {
                    toast.update(state.toastId, {
                        render: 'Signin successful',
                        type: 'success',
                        isLoading: false,
                        autoClose: 2000,
                        closeOnClick: true,
                    });
                }
            })
            .addCase(signin.rejected, rejected)

            .addCase(current.pending, (state) => {
                state.error = null;
            })
            .addCase(current.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.isLogin = true;
            })
            .addCase(current.rejected, (state, action) => {
                state.error = action.payload;
            })

            .addCase(logout.pending, pending)
            .addCase(logout.fulfilled, (state) => {
                state.isLogin = false;
                state.user = {};
                state.token = '';
            })
            .addCase(logout.rejected, rejected);
    },
});

export default authSlice.reducer;
