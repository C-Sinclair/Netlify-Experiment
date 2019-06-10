import { combineReducers } from 'redux'
import userReducer as user from './user'

const appReducer = combineReducers({
    user
})

const reducer = (state, action) => {
    if (action.type === 'SIGNOUT_USER') {
        state = undefined
    }
    return appReducer(state, action)
}

export default reducer