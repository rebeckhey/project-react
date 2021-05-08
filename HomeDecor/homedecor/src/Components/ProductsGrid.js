
import {Link} from 'react-router-dom'
const ProductsGrid = ({product}) => {
  
    return (

  <div className="col">
    <div className="card rounded border">
        <Link to={`/products/${product._id}`}>
      <img
        src={product.image}
        className="img-size card-img-top"
        alt="..."
      />
      </Link>
      <div className="card-body">
          <div className="d-flex justify-content-between">
              <div >
              <Link to={`/products/${product._id}`}>
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text price">{product.price}:-</p>
        </Link>
        </div>
        <button type="button" className="btn btn-outline-dark" data-mdb-ripple-color="dark">ADD TO CART</button>
        </div>
      </div>
    </div>
  </div>
 
    )
}

export default ProductsGrid
