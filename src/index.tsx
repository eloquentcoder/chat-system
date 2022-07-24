import React from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom";
import App from './App/App';

import './index.css'

const container = document.getElementById('root');

const root = ReactDOM.createRoot(container as HTMLElement).render(
    <React.StrictMode>
        <Router>
            <App />
        </Router>
    </React.StrictMode>
);


