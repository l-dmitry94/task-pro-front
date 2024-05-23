import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import WelcomePage from '../pages/WelcomePage';
import AuthPage from '../pages/AuthPage';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import HomePage from 'pages/HomePage';
import ScreensPage from 'pages/ScreensPage';

import { useAuth } from '../hooks/useAuth';
import { current } from '../redux/auth/auth-operations';

const App = () => {
    const dispatch = useDispatch();
    const { isRefreshing } = useAuth();

    useEffect(() => {
        dispatch(current());
    }, [dispatch]);

    return (
        <>
            {!isRefreshing && (
                <>
                    <Routes>
                        <Route element={<PublicRoute />}>
                            <Route
                                path="/"
                                element={<Navigate to="/welcome" />}
                            />
                            <Route path="/welcome" element={<WelcomePage />} />
                            <Route path="/auth/:id" element={<AuthPage />} />
                        </Route>

                        <Route element={<PrivateRoute />}>
                            <Route path="/" element={<Navigate to="/home" />} />
                            <Route path="/home" element={<HomePage />} />
                            <Route
                                path="/home/:boardName"
                                element={<ScreensPage />}
                            />
                        </Route>
                    </Routes>

                    <ToastContainer theme="colored" hideProgressBar />
                </>
            )}
        </>
    );
};

export default App;
