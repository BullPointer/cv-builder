/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react"

const AuthContext = createContext(null);
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [previews, setPreviews] = useState(null);

    const login = (user) => {
        setUser(user)
    }
    const logout = () => {
        setUser(null)
    }
    const setImg = (img) => {
        setPreviews(img);
    }
    const rmImg = () => {
        setPreviews(null)
    }

    return (
        <AuthContext.Provider value={{
            user, 
            login, 
            logout,
            previews,
            setImg,
            rmImg,
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext);
}