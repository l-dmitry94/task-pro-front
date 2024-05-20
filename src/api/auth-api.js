import axios from 'axios';

const authInstance = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
});

const setToken = (token) => {
    if (token) {
        return (authInstance.defaults.headers.common.Authorization = `Bearer ${token}`);
    }

    authInstance.defaults.headers.authorization = '';
};

export const signupRequest = async (body) => {
    const response = await authInstance.post('/auth/signup', body);
    setToken(response.data.token);
    return response.data;
};
