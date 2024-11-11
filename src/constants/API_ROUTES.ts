export const API_ROUTES = {
    AUTH: '/auth',
    USERS: '/users',

    get LOGIN() {
        return this.AUTH + '/login';
    },
    get LOGOUT() {
        return this.AUTH + '/logout';
    },

    get USER_DASHBOARD() {
        return this.USERS + '/dashboard';
    },
};
