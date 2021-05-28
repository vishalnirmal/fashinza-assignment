import axios from 'axios';
import * as actionTypes from '../constants/form';

export const submitForm = (product) => async (dispatch) => {
    dispatch({
        type: actionTypes.FORM_REQUEST
    });
    try {
        await axios.post("http://localhost:5500/products", product);
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