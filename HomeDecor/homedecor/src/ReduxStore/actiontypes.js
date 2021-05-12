const actiontypes = () => {
    return {
        ProductList: {
            set: 'SET_PRODUCT_LIST',
            setOne: 'SET_ONE_PRODUCT'
        },
        Cart:{
            add:'ADD_TO_CART',
            trash: 'DELETE_FROM_CART',
            deleteAll: 'DELETE_ALL'
        }

    }
}

export default actiontypes; 