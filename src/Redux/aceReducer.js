const ace = []

const aceReducer = (state = ace,action) => {
    switch (action.type) {
        case "ADD_ACE":
            return state = action.payload
            
            default:
                return state
    
    }
}
export default aceReducer