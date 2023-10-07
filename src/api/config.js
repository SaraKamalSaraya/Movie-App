import axios from 'axios';
export const API_KEY = process.env.REACT_APP_API_KEY;
export const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
})