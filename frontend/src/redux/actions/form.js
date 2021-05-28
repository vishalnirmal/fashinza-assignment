import axios from 'axios';
import * as actionTypes from '../constants/form';
import {productAdded, productUpdated} from './product';

export const submitForm = (product, type) => async (dispatch) => {
    dispatch({
        type: actionTypes.FORM_REQUEST
    });
    try {
        if (type === "add"){
            await axios.post("/products", product);
            dispatch(productAdded());
        }
        else{
            await axios.put(`/products/${product._id}`, product);
            dispatch(productUpdated());
        }
        dispatch({
            type: actionTypes.FORM_SUCCESS,
            payload: "Product added succesfully"
        });
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