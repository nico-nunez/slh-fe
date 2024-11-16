import axios from 'axios';
import { API_ROUTES } from '../../constants';

export const getPublicLists = async () => {
    const { data } = await axios.get<GETPublicLists>(API_ROUTES.LISTS_PUBLIC);

    return data;
};
