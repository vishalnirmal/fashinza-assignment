import * as actionTypes from '../constants/product';
import * as productsActionTypes from '../constants/products';
import axios from 'axios';
import { getCategories } from './categories';

export const productAdded = () => async (dispatch) => {
    dispatch({
        type: actionTypes.ADD_SUCCESS
    });
    setTimeout(()=>{
        dispatch(resetProduct());
    }, 3000);
}

export const resetProduct = () => {
    return {
        type: actionTypes.RESET_PRODUCT
    };
}

export const productUpdated = () => async (dispatch) => {
    dispatch({
        type: actionTypes.UPDATE_SUCCESS
    });
    setTimeout(()=>{
        dispatch(resetProduct());
    }, 3000);
}

export const productDeleted = () => {
    return {
        type: actionTypes.DELETE_SUCCESS
    };
}

export const productNotDeleted = (message) => {
    return {
        type: actionTypes.DELETE_ERROR,
        payload: message
    };
}

export const deleteProductWithId = (id) => async (dispatch) => {
    try {
        await axios.delete(`/products/${id}`);
        dispatch(productDeleted());
        dispatch({
            type: productsActionTypes.DELETE_PRODUCT,
            payload: id
        });
        dispatch(getCategories());
    } catch (error) {
        dispatch(productNotDeleted(error.message));
    }
    setTimeout(()=>{
        dispatch(resetProduct());
    }, 3000);
}