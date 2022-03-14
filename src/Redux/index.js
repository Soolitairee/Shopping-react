import { combineReducers, createStore } from 'redux'
import arielReducer from './arielReducer'
import fairyReducer from './fairyReducer'
import aceReducer from './aceReducer'
import sabunReducer from './sabunReducer'
import aletReducer from './aletReducer'
import satilanReducer from './satilanReducer'
import ucuzReducer from './ucuzReducer'
import basketReducer from './basketReducer'
import wishReducer from './wishReducer'

const reducer = combineReducers({
arielReducer,
fairyReducer,
aceReducer,
sabunReducer,
aletReducer,
satilanReducer,
ucuzReducer,
basketReducer,
wishReducer,
})
function configureStore () {
    return createStore(reducer)
}
export default configureStore