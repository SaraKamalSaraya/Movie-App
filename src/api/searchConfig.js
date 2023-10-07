import { axiosInstance } from './config';
import { API_KEY } from './config';

    export const getSearch = (language) => {
        return axiosInstance.get(`/movie/popular?api_key=${API_KEY}&language=${language}`);
    }