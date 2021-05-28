import * as actionTypes from '../constants/filter';
const filterReducer = (state={}, action)=>{
    switch (action.type) {
        case actionTypes.ADD_NAME_FILTER:
            return {
                ...state,
                name: action.payload
            }
        case actionTypes.ADD_CATEGORY_FILTER:
            return {
                ...state,
                category: action.payload
            }
        case actionTypes.ADD_PRICE_FILTER:
            let new_state = {...state}
            if (action.payload.min){
                new_state['min'] = action.payload.min
            }
            else{
                delete new_state['min'];
            }
            if (action.payload.max){
                new_state['max'] = action.payload.max
            }
            else{
                delete new_state['max'];
            }
            return new_state
        case actionTypes.REMOVE_FILTER:
            return {}
        default:
            return state
    }
}

export default filterReducer;