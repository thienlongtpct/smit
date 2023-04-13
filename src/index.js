import React from 'react';
import ReactDOM from 'react-dom/client';

import './theme/index.css';
import './theme/font.css';
import './theme/padding.css';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);