import { API_ROUTES } from '../../constants';
import { apiInstance } from '../axios-config';

export const getPublicParties = async () => {
    const { data } = await apiInstance.get<GETPublicParties>(
        API_ROUTES.PARTIES
    );
    return data;
};

export const getPartyData = async (partyId: string) => {
    const { data } = await apiInstance.get<GETPartyData>(
        API_ROUTES.PARTIES + `/${partyId}`
    );
    return data;
};

export const updateMembers = async (body: UpdateMembersBody) => {
    const { data } = await apiInstance.post(
        API_ROUTES.UPDATE_PARTY_MEMBERS,
        body
    );
    return data;
};

export const makePartySelections = async (partyId: string) => {
    const { data } = await apiInstance.post(
        API_ROUTES.PARTIES + `/${partyId}/selections`
    );
    return data;
};
