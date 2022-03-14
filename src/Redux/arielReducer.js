const ariel = []

const arielReducer = (state = ariel,action) => {
    switch (action.type) {
        case "ADD_ARIEL":
            return state = action.payload
            
            default:
                return state
    
    }
}
export default arielReducer