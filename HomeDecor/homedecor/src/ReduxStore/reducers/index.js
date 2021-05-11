import { combineReducers } from 'redux'
import ProductReducer from './ProductReducer'
import CartReducer from './CartReducers'

export default combineReducers({
    PR: ProductReducer,
    CR: CartReducer
})