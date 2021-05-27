import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer from './reducers/reducers';

const INITIAL_STATE = {
    products: {
        data: []
    }
};

const store = createStore(reducer, INITIAL_STATE, composeWithDevTools(applyMiddleware(thunk)));

export default store;