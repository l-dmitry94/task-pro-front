import { Route, Routes } from 'react-router-dom';

import WelcomePage from '../pages/WelcomePage';
import AuthPage from '../pages/AuthPage';

const App = () => {
    return (
        <Routes>
            <Route path="/welcome" element={<WelcomePage />} />
            <Route path="/auth/:id" element={<AuthPage />} />
        </Routes>
    );
};

export default App;
