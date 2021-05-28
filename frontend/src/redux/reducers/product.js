import * as actionTypes from '../constants/product';

const productReducer = (state={}, action) => {
    switch (action.type) {
        case actionTypes.ADD_SUCCESS:
            return {
                success: true,
                type: "ADD"
            }
        case actionTypes.UPDATE_SUCCESS:
            return {
                success: true,
                type: "UPDATE"
            }
        case actionTypes.DELETE_SUCCESS:
            return {
                success: true,
                type: "DELETE"
            }
        case actionTypes.DELETE_ERROR:
            return {
                success: false,
                error: action.payload,
                type: "DELETE"
            }
        case actionTypes.RESET_PRODUCT:
            return {}
        default:
            return state;
    }
}

export default productReducer;