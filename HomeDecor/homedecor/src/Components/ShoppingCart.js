import React from 'react'
import {addToCart, deleteFromCart, deleteAllbyID} from '../ReduxStore/actions/CartActions'
import { useDispatch} from 'react-redux'



const ShoppingCart = ({ product }) => {
    const dispatch = useDispatch()




   
    
    
    return (
        <div>
            
            <div className="marking d-flex justify-content-between align-items-center">
                <div className="d-flex  align-items-center">

                    <img className="cart-img " src={product.image} alt="..." />


                    <p className="m-0 quantity ps-4">{product.title}</p>
                </div>
                <p className="m-0 quantity">{product.price}:-</p>
                    <div className="d-flex quant align-items-center">
                    <p className="ps-4 m-0 quantity plus-minus" onClick={() => {dispatch(deleteFromCart(product._id)) }} >-</p>
                    <p className="ps-3 pe-3 m-0 quantity">{product.quantity}</p>
                    <p className="pe-4 m-0 quantity plus-minus" onClick={() => {dispatch(addToCart(product)) }} >+</p>
                </div>
                <p className="m-0 remove quantity"onClick={() => {dispatch(deleteAllbyID(product._id)) }}>Remove Item</p>
                <p className="m-0 quantity">{product.quantity * product.price}:-</p>
            </div>
            <hr className="line" />
            

        </div>
    )
}

export default ShoppingCart

