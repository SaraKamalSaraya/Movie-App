import { axiosInstance } from './config';
import { API_KEY } from './config';

export const getMoviesDetails = (id,language)=>{
    return axiosInstance.get(`/movie/${id}?api_key=${API_KEY}&language=${language}`);
}