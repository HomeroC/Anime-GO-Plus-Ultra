import React from 'react'
import { createContext, useReducer } from 'react'

const initialState = {
    username: null,
    password: null,
}

const AuthContext = createContext()

export const AuthContextProvider = (props) => {
    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case "LOGIN":
                return {
                    ...state,
                    username: action.payload.username,
                    password: action.payload.password,
                }
            case "LOGOUT":
                return initialState
            default:
                return state
        }
    }, initialState)

    return (
        <AuthContext.Provider value={{ state, dispatch }}>
            {props.children}
        </AuthContext.Provider>
    )    
} 

export default AuthContext

