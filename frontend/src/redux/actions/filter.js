import * as actionTypes from '../constants/filter';

export const addName = (name) => {
    return {
        type: actionTypes.ADD_NAME_FILTER,
        payload: name
    }
}

export const addCategory = (category) => {
    return {
        type: actionTypes.ADD_CATEGORY_FILTER,
        payload: category
    }
} 

export const addPrice = (price) => {
    return {
        type: actionTypes.ADD_PRICE_FILTER,
        payload: price
    }
}

export const removeFilters = () => {
    return {
        type: actionTypes.REMOVE_FILTER
    }
}