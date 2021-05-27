import * as actionTypes from '../constants/products';

export const productsReducer = (state={data:[]}, action) => {
    switch (action.type) {
        case actionTypes.FETCH_PRODUCTS_REQUEST:
            return {
                loading: true,
                error: false
            }
        case actionTypes.FETCH_PRODUCTS_SUCCESS:
            return {
                loading: false,
                error: false,
                data: action.payload
            }
        case actionTypes.FETCH_PRODUCTS_ERROR:
            return {
                loading: false,
                error: true
            }
        default:
            return state;
    }
}