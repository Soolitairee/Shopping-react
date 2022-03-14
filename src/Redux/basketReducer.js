const basket = []

const basketReducer = (state = basket,action) => {
    
    switch (action.type) {
       case "ADD_BASKET":
           return state = [...state,action.payload]
           case "REMOVE":
               return state = state.filter(index => index.id !== action.payload)
        default:
            return state
    }
}


export default basketReducer
