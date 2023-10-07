import { axiosInstance } from './config';
import { API_KEY } from './config';

    export const getSearch = (searchTitle,language) => {
        return axiosInstance.get(`/search/movie?api_key=${API_KEY}&query=${searchTitle}&language=${language}`); 
    }