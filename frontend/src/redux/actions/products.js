import axios from 'axios';
import * as actionTypes from '../constants/products';

export const getProducts = (filter) => async (dispatch) => {
    dispatch({
        type: actionTypes.FETCH_PRODUCTS_REQUEST
    });
    try {
        const products = await axios({
            method: "GET",
            url: "http://localhost:5500/products",
            params: filter
        });
        dispatch({
            type: actionTypes.FETCH_PRODUCTS_SUCCESS,
            payload: products.data
        });
    } catch (error) {
        dispatch({
            type: actionTypes.FETCH_PRODUCTS_ERROR
        });
    }
}