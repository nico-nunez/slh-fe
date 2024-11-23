import axios from 'axios';
import { API_ROUTES } from '../../constants';

export const getPublicLists = async () => {
    const { data } = await axios.get<GETPublicLists>(API_ROUTES.LISTS_PUBLIC);

    return data;
};

export const publishNewList = async (body: PublishListBody) => {
    const { data } = await axios.post<POSTPublishList>(
        API_ROUTES.PUBLISH_LIST,
        body
    );

    return data;
};
