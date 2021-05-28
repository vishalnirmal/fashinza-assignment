import * as actionTypes from '../constants/products';

const productsReducer = (state={data:[]}, action) => {
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
        case actionTypes.DELETE_PRODUCT:
            let products = state.data.filter(product=>product._id!==action.payload);
            return {
                loading: false,
                error: false,
                data: products
            }
        default:
            return state;
    }
}

export default productsReducer;