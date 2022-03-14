const ucuz = []

const ucuzReducer = (state = ucuz,action) => {
    switch (action.type) {
        case "ADD_UCUZ":
            return state = action.payload
            
            default:
                return state
    
    }
}
export default ucuzReducer