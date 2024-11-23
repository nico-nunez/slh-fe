import { API_ROUTES } from '../../constants';
import { apiInstance } from '../axios-config';

export const getDashboardData = async () => {
    const { data } = await apiInstance.get<GETDashboardData>(
        API_ROUTES.USER_DASHBOARD
    );

    return data;
};
