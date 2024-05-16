import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import './styles/index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter basename="/task-pro-front">
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
