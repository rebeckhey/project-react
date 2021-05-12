import actiontypes from '../actiontypes'

export const addToCart = (product) => {
return {
    type: actiontypes().Cart.add,
    payload: product,
}}

export const deleteFromCart = (id) => {
    return{
        type:actiontypes().Cart.trash,
        payload:id
    }
}

export const deleteAllbyID = (id) => {
    return{
        type:actiontypes().Cart.deleteAll,
        payload:id
    }
}

