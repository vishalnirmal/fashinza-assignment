import * as actionTypes from '../constants/categories';

const categoriesReducer = (state={categories:[]}, action) => {
    switch (action.type) {
        case actionTypes.FETCH_CATEGORIES_REQUEST:
            return {
                loading: true
            }
        case actionTypes.FETCH_CATEGORIES_SUCCESS:
            return {
                loading: false,
                categories: action.payload
            }
        case actionTypes.FETCH_CATEGORIES_ERROR:
            return {
                loading: false,
                error: true
            }
        default:
            return state;
    }
}

export default categoriesReducer;