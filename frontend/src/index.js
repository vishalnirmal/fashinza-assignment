import React from 'react';
import reactDOM from 'react-dom';
import App from './Components/App/App';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './redux/store';
import './index.scss';

reactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>,
    document.getElementById("root")
);