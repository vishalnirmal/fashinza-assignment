import axios from 'axios';
import * as actionTypes from '../constants/form';

export const submitForm = (product, type) => async (dispatch) => {
    dispatch({
        type: actionTypes.FORM_REQUEST
    });
    try {
        if (type === "add"){
            await axios.post("http://localhost:5500/products", product);
        }
        else{
            await axios.put(`http://localhost:5500/products/${product._id}`, product);
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