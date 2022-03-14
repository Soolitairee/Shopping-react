const alet = []

const aletReducer = (state = alet,action) => {
    switch (action.type) {
        case "ADD_ALET":
            return state = action.payload
            
            default:
                return state
    
    }
}
export default aletReducer