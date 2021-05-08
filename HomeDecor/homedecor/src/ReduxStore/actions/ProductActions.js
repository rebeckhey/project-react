import axios from 'axios'
import actiontypes from '../actiontypes'

export const getProducts = () => {
    return async dispatch => {
        const res = await axios.get('http://localhost:9090/api/shoppingitems')
        dispatch(setProducts(res.data)) //dispatch skickar vidare till  reducern 
    }
}

export const setProducts = (products) => {
return {
type: actiontypes().ProductList.set,
payload: products
}
}


export const getOneProduct = (id) => {
    return async dispatch => {
        const res = await axios.get(`http://localhost:9090/api/shoppingitems/${id}`)
        dispatch(setOneProduct(res.data)) //dispatch skickar vidare till  reducern 
    }
}

export const setOneProduct = (oneProduct) => {
return {
type: actiontypes().ProductList.setOne,
payload: oneProduct
}
}
