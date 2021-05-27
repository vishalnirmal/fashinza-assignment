import {productsReducer} from './products';
import {combineReducers} from 'redux';

export default combineReducers({
    products: productsReducer
});