import { axiosInstance } from './config';
import { API_KEY } from './config';

export const getMovies = (page,language) => {
    return axiosInstance.get(`/movie/popular?api_key=${API_KEY}&page=${page}&language=${language}`);
}