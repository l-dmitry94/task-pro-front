import axios from 'axios';

const authInstance = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
});

const setToken = (token) => {
    if (token) {
        return (authInstance.defaults.headers.authorization = `Bearer ${token}`);
    }
    authInstance.defaults.headers.authorization = '';
};

export const signupRequest = async (body) => {
    const response = await authInstance.post('/auth/signup', body);
    setToken(response.data.token);
    return response.data;
};

export const signinRequest = async (body) => {
    const response = await authInstance.post('/auth/signin', body);
    setToken(response.data.token);
    return response.data;
};

export const currentRequest = async (token) => {
    setToken(token);
    try {
        const response = await authInstance.get('/auth/current');
        return response.data;
    } catch (error) {
        setToken();
        throw error;
    }
};

export const logoutRequest = async () => {
    const response = await authInstance.post('/auth/logout');
    setToken();
    return response.data;
};
