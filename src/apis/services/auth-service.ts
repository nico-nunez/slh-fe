import { apiInstance } from '../axios-config';
import { API_ROUTES } from '../../constants/API_ROUTES';

export const loginUser = async (email: string, password: string) => {
    const { data } = await apiInstance.post<POSTLoginResponse>(
        API_ROUTES.LOGIN,
        {
            email,
            password,
        }
    );

    return data;
};

export const logoutUser = async () => {
    const { data } = await apiInstance.get(API_ROUTES.LOGOUT);

    return data;
};
