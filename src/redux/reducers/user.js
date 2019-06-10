import { LOGIN, LOGOUT } from '../actions/types'

const initialState = {
    user: {},
    loading: false
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                user: action.payload
            }
        case LOGOUT: 
            return {
                ...state,
                user: null
            }

        default: 
            return state
    }
}

export default userReducer