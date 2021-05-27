import axios from 'axios';
import * as actionTypes from '../constants/categories';

export const getCategories = () => async (dispatch) => {
    dispatch({
        type: actionTypes.FETCH_CATEGORIES_REQUEST
    });

    try {
        const categories = await axios({
            method: "GET",
            url: "http://localhost:5500/products/categories"
        });
        dispatch({
            type: actionTypes.FETCH_CATEGORIES_SUCCESS,
            payload: categories.data
        });
    } catch (error) {
        dispatch({
            type: actionTypes.FETCH_CATEGORIES_ERROR
        });
    }
}