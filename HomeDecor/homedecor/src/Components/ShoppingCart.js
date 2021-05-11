import React from 'react'



const ShoppingCart = ({ product }) => {
   
   
    
    
    return (
        <div>
            
            <div className="marking d-flex justify-content-between align-items-center">
                <div className="d-flex  align-items-center">

                    <img className="cart-img " src={product.image} alt="..." />


                    <p className="m-0 quantity ps-4">{product.title}</p>
                </div>
                <p className="m-0 quantity">{product.price}:-</p>
                    <div className="d-flex quant align-items-center">
                    <p className="ps-4 m-0 quantity plus-minus">-</p>
                    <p className="ps-3 pe-3 m-0 quantity">{product.quantity}</p>
                    <p className="pe-4 m-0 quantity plus-minus" >+</p>
                </div>
                <p className="m-0 remove quantity">Remove Item</p>
                <p className="m-0 quantity">{product.quantity * product.price}:-</p>
            </div>
            <hr className="line" />
            

        </div>
    )
}

export default ShoppingCart

