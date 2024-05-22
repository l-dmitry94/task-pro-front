import { Outlet, Navigate } from 'react-router-dom';

import { useAuth } from '../hooks/useAuth';

const PublicRoute = () => {
    const { isLogin } = useAuth();

    if (isLogin) {
        return <Navigate to="/home" />;
    }

    return <Outlet />;
};

export default PublicRoute;
