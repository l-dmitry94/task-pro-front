import { Outlet, Navigate } from 'react-router-dom';

import { useAuth } from '../hooks/useAuth';

const PrivateRoute = () => {
    const { isLogin, token } = useAuth();

    if (!isLogin && !token) {
        return <Navigate to="/welcome" />;
    }

    return <Outlet />;
};

export default PrivateRoute;
