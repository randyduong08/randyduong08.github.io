import React from 'react';
import ReactDOM from 'react-dom/client';
import './scripts,styles/index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter } from 'react-router-dom';

const rootElement = document.getElementById('root');
if (rootElement != null){
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <HashRouter>
            <App />
        </HashRouter>
    );
}

