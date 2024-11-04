import { API_ROUTES } from '../../constants/API_ROUTES';
import { apiInstance } from '../axios-config';

export const loginUser = async (email: string, password: string) => {
    const { data } = await apiInstance.post(API_ROUTES.LOGIN, {
        email,
        password,
    });

    return data;
};

export const logoutUser = async () => {
    const { data } = await apiInstance.get(API_ROUTES.LOGOUT);

    return data;
};
