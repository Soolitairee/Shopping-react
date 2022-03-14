const fairy = []

const fairyReducer = (state = fairy,action) => {
    switch (action.type) {
        case "ADD_FAIRY":
            return state = action.payload
            
            default:
                return state
    
    }
}
export default fairyReducer