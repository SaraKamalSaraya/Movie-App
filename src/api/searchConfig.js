import axios from 'axios';

export const axiosInstanceForSearch = axios.create({
    baseURL: process.env.REACT_APP_SEARCH_URL
})