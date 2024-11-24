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

export const updateList = async (listId: string, body: PublishListBody) => {
    console.log(body);
    const { data } = await axios.put<PUTPublishList>(
        API_ROUTES.LISTS + `/${listId}`,
        body
    );

    return data;
};

export const getListData = async (listId: string) => {
    const { data } = await axios.get<ListData>(API_ROUTES.LISTS + `/${listId}`);

    return data;
};

export const deleteList = async (list: ListData) => {
    const { data } = await axios.delete<{ message: string; id: string }>(
        API_ROUTES.LISTS + `/${list._id}`
    );
    return data;
};
