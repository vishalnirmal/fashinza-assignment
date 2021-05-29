import * as actionTypes from '../constants/filter';
const filterReducer = (state={}, action)=>{
    var updatedFilter = {};
    switch (action.type) {
        case actionTypes.ADD_NAME_FILTER:
            updatedFilter = {
                ...state,
                name: action.payload
            }
            localStorage.setItem('filter', JSON.stringify(updatedFilter));
            return updatedFilter;
        case actionTypes.ADD_CATEGORY_FILTER:
            updatedFilter = {
                ...state,
                category: action.payload
            }
            localStorage.setItem('filter', JSON.stringify(updatedFilter));
            return updatedFilter;
        case actionTypes.ADD_PRICE_FILTER:
            updatedFilter = {
                ...state
            }
            if (action.payload.min){
                updatedFilter['min'] = action.payload.min
            }
            else{
                delete updatedFilter['min'];
            }
            if (action.payload.max){
                updatedFilter['max'] = action.payload.max
            }
            else{
                delete updatedFilter['max'];
            }
            localStorage.setItem('filter', JSON.stringify(updatedFilter));
            return updatedFilter
        case actionTypes.REMOVE_FILTER:
            localStorage.setItem('filter', JSON.stringify({}));
            return {}
        default:
            return state
    }
}

export default filterReducer;