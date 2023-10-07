import { axiosInstance } from './config';
import { API_KEY } from './config';

export const getRecomendedMovies = (id,language)=>{
    return axiosInstance.get(`/movie/${id}/recommendations?api_key=${API_KEY}&language=${language}`);
}