import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import {useSelector} from 'react-redux'




const Navbar = () => {
    const shopQuantity = useSelector(state => state.CR.shopQuantity)
   
    return (
        
            <nav className="navbar sticky-top navbar-light bg-light">
                <div className="container">
                    <Link className="brand-font brand-style navbar-brand" to="/">Homedecoration.com</Link>
                    <div className="d-flex"> 
                        <NavLink exact activeClassName="active-link" className="brand-font nav-links navbar-brand" to="/">Home</NavLink>
                        <NavLink exact activeClassName="active-link" className="brand-font nav-links navbar-brand" to="/about">About</NavLink>
                        <NavLink exact activeClassName="active-link" className="brand-font nav-links navbar-brand" to="/products">Products</NavLink>
                        <NavLink exact activeClassName="active-link" className="brand-font nav-links navbar-brand" to="/shoppingcart"><i className="fas fa-shopping-cart"><span className="badge quantity-badge rounded-pill badge-notification bg-danger">{shopQuantity}</span></i></NavLink>
                        <NavLink exact activeClassName="active-link" className="brand-font nav-links navbar-brand" to="/login"><i className="fas fa-user-circle"></i></NavLink>
                    </div>
              
                </div>
                
            </nav>        
    )
}

export default Navbar
