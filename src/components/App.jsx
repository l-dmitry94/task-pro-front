import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import WelcomePage from '../pages/WelcomePage';
import AuthPage from '../pages/AuthPage';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { current } from '../redux/auth/auth-operations';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import HomePage from 'pages/HomePage';

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(current());
    }, [dispatch]);

    return (
        <>
            <Routes>
                <Route element={<PublicRoute />}>
                    <Route path="/welcome" element={<WelcomePage />} />
                    <Route path="/auth/:id" element={<AuthPage />} />
                </Route>

                <Route element={<PrivateRoute />}>
                    <Route path="/home" element={<HomePage />} />
                </Route>
            </Routes>

            <ToastContainer theme="colored" hideProgressBar />
        </>
    );
};

export default App;
