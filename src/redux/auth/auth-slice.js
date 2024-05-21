import { createSlice } from '@reduxjs/toolkit';
import { signup } from './auth-operations';
import { pending, rejected } from '../constants/constants';

const initialState = {
    user: {},
    token: '',
    isLogin: false,
    isLoading: false,
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
                state.isLoading = false;
                state.error = null;
            })
            .addCase(signup.rejected, rejected);
    },
});

export default authSlice.reducer;
