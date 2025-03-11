import { ReactNode } from "react";
import ROUTES from "./path";
import TITLES from "./title";
import Home from "../pages/Home";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import NotFound from "../pages/NotFound";

interface RouteType {
    path: string,
    component: ReactNode,
    title: string,
    noLayout: boolean,
    private: boolean
}

const routes: RouteType[] = [
    {
        path: ROUTES.HOME,
        component: <Home />,
        title: TITLES.HOME,
        noLayout: false,
        private: false
    },
    {
        path: ROUTES.LOGIN,
        component: <Login />,
        title: TITLES.LOGIN,
        noLayout: true,
        private: false
    },
    {
        path: ROUTES.SIGNUP,
        component: <Signup />,
        title: TITLES.SIGNUP,
        noLayout: true,
        private: false
    },
    {
        path: ROUTES.NOTFOUND,
        component: <NotFound />,
        title: TITLES.NOTFOUND,
        noLayout: false,
        private: false
    },
]

export default routes