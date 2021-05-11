import actiontypes from '../actiontypes'

export const addToCart = (product) => {
return {
    type: actiontypes().Cart.add,
    payload: product,
}}