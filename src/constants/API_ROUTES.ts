export const API_ROUTES = {
    AUTH: '/api/auth',
    USERS: '/api/users',
    LISTS: '/api/lists',
    PARTIES: '/api/parties',

    get LOGIN() {
        return this.AUTH + '/login';
    },
    get LOGOUT() {
        return this.AUTH + '/logout';
    },

    get USER_DASHBOARD() {
        return this.USERS + '/dashboard';
    },

    get LISTS_PUBLIC() {
        return this.LISTS + '/public';
    },
    get PUBLISH_LIST() {
        return this.LISTS + '/publish';
    },
};
