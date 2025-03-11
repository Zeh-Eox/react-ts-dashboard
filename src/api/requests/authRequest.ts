import HTTP_CLIENT from "../client";

interface ILoginRequest {
    email: string;
    password: string;
}

export const login = async (data: ILoginRequest) => {
    const response = await HTTP_CLIENT.post('auth/login', data);
    return response.data;
}