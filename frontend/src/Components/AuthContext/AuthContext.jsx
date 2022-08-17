import { useState, useEffect, createContext, useContext } from 'react'

const AuthContext = createContext()

export default AuthContext;

export function useAuth() {
    return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
    let [authTokens, setAuthTokens] = useState(null)
    let [user, setUser] = useState(null)

    let login = async (username, password) => {
        let response = await fetch('http://127.0.0.1:8000/api/v1/token/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        })

        let data = await response.json()
    }

    let contextData = {
        login
    }
    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}
