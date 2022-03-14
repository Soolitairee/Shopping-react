const sabun = []

const sabunReducer = (state = sabun,action) => {
    switch (action.type) {
        case "ADD_SABUN":
            return state = action.payload
            
            default:
                return state
    
    }
}
export default sabunReducer