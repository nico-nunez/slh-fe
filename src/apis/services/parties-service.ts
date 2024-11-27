import { API_ROUTES } from '../../constants';
import { apiInstance } from '../axios-config';

export const getPublicParties = async () => {
    const { data } = await apiInstance.get<GETPublicParties>(
        API_ROUTES.PARTIES
    );

    return data;
};
