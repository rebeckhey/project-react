import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getProducts} from '../ReduxStore/actions/ProductActions'
import ProductsGrid from './ProductsGrid'

const ListProducts = () => {
    const dispatch = useDispatch()

    const ProductList = useSelector(state => state.PR) //state.PR (productreducer)


    useEffect(() => { //useEffect kommer att köras on mount om man lägger in en tom array. När det man lägger in i arrayen ändras kommer funktionen att köras
    dispatch(getProducts())
    }, [dispatch])

    return (
        <div className="container">
            <div className="mt-3 row row-cols-1 row-cols-md-3 g-4">
            {
                ProductList && ProductList.map(product => (
                    <ProductsGrid key={product._id} product={product}/>
                ))
            }
           
           </div>
        </div>
    )
}

export default ListProducts

