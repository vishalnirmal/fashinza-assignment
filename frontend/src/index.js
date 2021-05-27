import React from 'react';
import reactDOM from 'react-dom';
import App from './Components/App/App';
import {BrowserRouter} from 'react-router-dom';
import './index.css';

reactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.getElementById("root")
);