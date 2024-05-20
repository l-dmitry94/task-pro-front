import { createSlice } from '@reduxjs/toolkit';
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
        builder;
    },
});

export default authSlice.reducer;
