export const APP_ROUTES = Object.freeze({
    DASHBOARD: '/dashboard',
    PROFILE: '/profile',
    LISTS: '/lists',
    PARTIES: '/parties',

    get DEFAULT_ROUTE() {
        return this.DASHBOARD;
    },
});
