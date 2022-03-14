const satilan = []

const satilanReducer = (state = satilan,action) => {
    switch (action.type) {
        case "ADD_SATILAN":
            return state = action.payload
            
            default:
                return state
    
    }
}
export default satilanReducer