export const API_ROUTES = {
    auth: '/auth',

    get LOGIN() {
        return this.auth + '/login';
    },
    get LOGOUT() {
        return this.auth + '/logout';
    },
};
