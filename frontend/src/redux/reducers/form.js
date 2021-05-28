import * as actionTypes from '../constants/form';

export const formReducer = (state={}, action) => {
    switch (action.type) {
        case actionTypes.FORM_REQUEST:
            return {
                loading: true
            }
        case actionTypes.FORM_SUCCESS:
            return {
                loading: false,
                success: action.payload
            }
        case actionTypes.FORM_ERROR:
            return {
                loading: false,
                error: action.payload
            }
        case actionTypes.FORM_RESET:
            return {}
        default:
            return state
    }
}