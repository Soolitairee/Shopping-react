const wish = []

const wishReducer = (state = wish,action) => {
    
    switch (action.type) {
       case "ADD_WISH":
           return state = [...state,action.payload]
        default:
            return state
    }
}


export default wishReducer
