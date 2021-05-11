import React from 'react'
import sale from './images/sale.jpg'
import sale2 from './images/sale2.jpg'
import sale3 from './images/sale3.jpg'




const HomePage = () => {
    return (
        <div className="Home d-flex justify-content-between">
            <div>
         <div><img className="animation fade-in sale rounded mt-5 ms-5" src={sale} alt="..."/></div>
        <div className="d-flex"> <img className="animation fade-in  sale rounded mt-5 ms-5" src={sale2} alt="..."/>
        <img className="animation fade-in  sale rounded mt-5 ms-5" src={sale3} alt="..."/></div></div>
       
        </div>
        
    )
}

export default HomePage
