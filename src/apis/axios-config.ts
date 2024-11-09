import axios from 'axios';

const baseURL =
    import.meta.env.VITE_APP_ENV === 'prod'
        ? 'https://api.santaslilhepler.net'
        : 'http://localhost:8080';

export const apiInstance = axios.create({
    baseURL,
    withCredentials: true,
});
