import axios from "axios";
import ROUTES from "../../routers/path";
import baseUrl from "./api";

const HTTP_CLIENT = axios.create({
    timeout: 10000,
    baseURL: baseUrl + 'api/',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
})

HTTP_CLIENT.interceptors.request.use(
    async (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

HTTP_CLIENT.interceptors.response.use(
    async (response) => {
        return response;
    },
    async (error) => {
        if (error.response.status === 401) {
            localStorage.removeItem('token');
            window.location.href = ROUTES.LOGIN;
        }
        return Promise.reject(error);
    }
);

export default HTTP_CLIENT;