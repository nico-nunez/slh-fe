import { API_ROUTES } from '../../constants';
import { apiInstance } from '../axios-config';

export const getPublicParties = async () => {
    const { data } = await apiInstance.get<GETPublicParties>(
        API_ROUTES.PARTIES
    );
    return data;
};

export const getPartyData = async (partyId: string) => {
    const { data } = await apiInstance.get(API_ROUTES.PARTIES + `/${partyId}`);

    return data;
};
