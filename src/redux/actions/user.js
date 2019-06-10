import {
    LOGIN,
    LOGOUT,
    LOADING,
    REGISTER
} from './types'

export const login = (user) => (dispatch) => {
    dispatch({
        type: LOADING
    })
    dispatch({
        type: LOGIN,
        payload: user
    })
}

export const logout = () => (dispatch) => {
    dispatch({
        type: LOADING
    })
    dispatch({
        type: LOGOUT,
        payload: null
    })
}

export const register = (user) => (dispatch) => {
    dispatch({
        type: LOADING
    })
    dispatch({
        type: REGISTER,
        payload: user
    })
}