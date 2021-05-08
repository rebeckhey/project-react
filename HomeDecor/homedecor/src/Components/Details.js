import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getOneProduct, setOneProduct} from '../ReduxStore/actions/ProductActions'
import { useParams } from 'react-router-dom';




const Details = () => {

    const id = useParams().id 
    
    const dispatch = useDispatch();
   
  
    useEffect(() => {
      dispatch(getOneProduct(id))
      
      return () => {
        // console.log('cleanup');
        dispatch(setOneProduct(null))
      }
      
    }, [dispatch, id])

    
   
    const oneItem = useSelector(state => state.PR)

    const ONEITEM = (oneItem && <div className="container mt-5 d-flex justify-content-center">
       
    <div>
        <img src={oneItem.image} className="rounded mx-auto details-img" alt="..." />
    </div>
    <div className="mx-5">
        <h1>{oneItem.title}</h1>
        <p>{oneItem.description}</p>
        <h3 className="mb-5 price">{oneItem.price}:-</h3>
        <button type="button" className="btn btn-outline-dark" data-mdb-ripple-color="dark">ADD TO CART</button>
    </div>
</div>
) //&& betyder att om oneItem är true, dvs den har lyckats hämta ett objekt, kommer det som står till höger att utföras


    return (
        
        <div>
            {ONEITEM}
        </div>
    )
}

export default Details
