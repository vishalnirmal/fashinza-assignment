import productsReducer from './products';
import filterReducer from './filter';
import categoriesReducer from './categories';
import formReducer from './form';
import productReducer from './product';
import {combineReducers} from 'redux';

export default combineReducers({
    products: productsReducer,
    filter: filterReducer,
    categories: categoriesReducer,
    form: formReducer,
    product: productReducer
});