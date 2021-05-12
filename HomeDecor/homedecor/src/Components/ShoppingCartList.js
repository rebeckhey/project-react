import React from 'react'
import {useSelector} from 'react-redux'
import ShoppingCart from './ShoppingCart'


const ShoppingCartList = () => {
const shopItem = useSelector(state => state.CR.shopItem)
const shopQuantity = useSelector(state => state.CR.shopQuantity)
const shopPrice = useSelector(state => state.CR.shopPrice)

    return (
        <div className="container">
            <h1 className="brand-font text-center mt-4">Your order:</h1>
            <hr className="line" />
            {
                
            shopItem && shopItem.map(product => (
                <ShoppingCart key={product._id} product={product}/> 
               
            ))
                 
            }
            <div className="d-flex justify-content-center">
                
           <div className="d-flex justify-content-center mt-4 mb-5 me-2" >
                <button className="checkout-btn ps-5 pe-5 p-4">Total cost: <span className="shopPrice">{shopPrice} :-</span>  </button>
            </div>
            <div className="d-flex justify-content-center mt-4 mb-5 me-2" >
                <button className="checkout-btn ps-5 pe-5 p-4">Total amount of items in cart: <span className="shopPrice">{shopQuantity}</span>   </button>
            </div>


            <div className="d-flex justify-content-center mt-4 mb-5 ms-2" >
                <button className="checkout-btnn checkout-btn ps-5 pe-5 p-4"> GO TO CHECKOUT</button>
            </div>
            </div>
        </div>
    )
}

export default ShoppingCartList 
 