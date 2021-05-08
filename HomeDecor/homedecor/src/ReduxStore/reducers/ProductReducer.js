import actiontypes from '../actiontypes'
//reducer är en funktion som tar in  argument, det aktuella statet och en action och returnerar ett nytt state
//statet kommer inte att ändras direkt utan reducern skapar ett nytt state
//reducer måste vara pure functions

const initState = null;
const ProductReducer = (state = initState, action) => { //state och action default eftersom att det är en reducer
    switch (action.type) { //när vi skriver action.type i switchen så anger vi sedan i caset vilken funktion vi vill köra
        case actiontypes().ProductList.set:
            state = action.payload
            return state

        case actiontypes().ProductList.setOne:
            state = action.payload
            return state

        default: return state
    }
}

export default ProductReducer