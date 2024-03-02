import React from 'react'
import { createContext, useReducer } from 'react'

const initialState = {
    username: null,
    userId: null,
}

const AuthContext = createContext()

export const AuthContextProvider = (props) => {
    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case "LOGIN":
               
                return {
                    ...state,
                    username: action.payload.username,
                    userId: action.payload.id,
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

