import axios from 'axios';
import * as actionTypes from '../constants/form';
import {productAdded, productUpdated} from './product';
import * as productsActionTypes from '../constants/products';

export const submitForm = (product, type) => async (dispatch) => {
    dispatch({
        type: actionTypes.FORM_REQUEST
    });
    try {
        if (type === "add"){
            const savedProduct = await axios.post("/products", product);
            dispatch(productAdded());
            dispatch({
                type: productsActionTypes.ADD_PRODUCT,
                payload: savedProduct.data
            });
        }
        else{
            const updatedProduct = await axios.put(`/products/${product._id}`, product);
            dispatch(productUpdated());
            dispatch({
                type: productsActionTypes.UPDATE_PRODUCT,
                payload: updatedProduct.data
            });
        }
        dispatch({
            type: actionTypes.FORM_SUCCESS,
            payload: "Product added succesfully"
        });
        dispatch(resetForm());
    } catch (error) {
        dispatch({
            type: actionTypes.FORM_ERROR,
            payload: error.message
        });
    }
}

export const resetForm = () => {
    return {
        type: actionTypes.FORM_RESET
    };
}