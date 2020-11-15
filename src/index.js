import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import {HashRouter} from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


ReactDOM.render(
    <HashRouter>
        <App />
    </HashRouter>, 
    document.getElementById('root'));
registerServiceWorker();
