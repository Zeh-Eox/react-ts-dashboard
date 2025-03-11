import { Navigate, useLocation } from "react-router-dom";
import ROUTES from "./path";
import useUserInformationStore from "../store/authStore";

interface AuthGuardProps {
    children: React.ReactNode;
}

const AuthGuard: React.FC<AuthGuardProps> = ({ children }) => {
    const location = useLocation();
    const isAuthenticated = useUserInformationStore();

    if (!isAuthenticated) {
        return <Navigate to={ROUTES.LOGIN} state={{ from: location }} replace />;
    }

    return children as React.ReactElement;
}

export default AuthGuard;