/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./Auth";

export const RequireAuth = ({ children }) => {
    const auth = useAuth();
    const location = useLocation();
    if (!auth.user) {
        return <Navigate to='/cv-builder/login' state={{path: location.pathname}} />
    }
    return children;
}