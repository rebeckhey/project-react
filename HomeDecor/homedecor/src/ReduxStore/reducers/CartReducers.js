import actiontypes from '../actiontypes'



const initialState = {
    shopItem: [],
    shopQuantity: 0,
    shopPrice: 0
};





const CartReducer = (state = initialState, action) => { //state och action default eftersom att det är en reducer
    let indexValue;
    switch (action.type) { //när vi skriver action.type i switchen så anger vi sedan i caset vilken funktion vi vill köra
        case actiontypes().Cart.add:
            try {
                indexValue = state.shopItem.findIndex(product => product._id === action.payload._id)
                let itemToCart = {
                    ...action.payload,
                    quantity: 1 // quantity inbakat i add to cart
                }

                indexValue < 0
                    ? state.shopItem = [...state.shopItem, itemToCart]
                    : state.shopItem[indexValue].quantity += 1

                state.shopQuantity = PlusItemsQuantity(state.shopItem)
                state.shopPrice = AllItemsPrice(state.shopItem)

            }

            catch (error) { }
            return state //return state ska alltid läggas till i slutet

        case actiontypes().Cart.trash:
            try {
                indexValue = state.shopItem.findIndex(product => product._id === action.payload)

                state.shopItem[indexValue].quantity === 1
                    ? state.shopItem = state.shopItem.filter(product => product._id !== action.payload)
                    : state.shopItem[indexValue].quantity -= 1
                state.shopQuantity = PlusItemsQuantity(state.shopItem)
                state.shopPrice = AllItemsPrice(state.shopItem)
            }
            catch (error) { }

            return state

        case actiontypes().Cart.deleteAll:

            state.shopItem = state.shopItem.filter(product => product._id !== action.payload)
    

    state.shopQuantity = PlusItemsQuantity(state.shopItem)
    state.shopPrice = AllItemsPrice(state.shopItem)
    return state

         


        default:
return state
    }
}

const PlusItemsQuantity = (qq) => {
    let Q = 0
    qq.forEach(product => {
        Q += product.quantity
    })
    return Q
}



const AllItemsPrice = (pp) => {
    let kr = 0
    pp.forEach(product => {
        kr += product.quantity * product.price
    })
    return kr
}



export default CartReducer

