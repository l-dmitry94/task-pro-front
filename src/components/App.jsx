import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import WelcomePage from '../pages/WelcomePage';
import AuthPage from '../pages/AuthPage';

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/welcome" element={<WelcomePage />} />
                <Route path="/auth/:id" element={<AuthPage />} />
            </Routes>

            <ToastContainer
                autoClose={1000}
                closeOnClick
                theme="colored"
                hideProgressBar
                limit={1}
            />
        </>
    );
};

export default App;
