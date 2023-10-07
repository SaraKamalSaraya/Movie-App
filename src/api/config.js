import axios from 'axios';
export const API_KEY = process.env.REACT_APP_API_KEY;
export const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
})


// axiosInstance.interceptors.request.use(function(config){
//     config.params = {
//         ...config.params,
//         language: "ar",
//     };
//     console.log(config);
//     return config;
// }, function(error) {
//     return Promise.reject(error);
// });
// axiosInstance.interceptors.response.use(function(config){
//     console.log(config);
//     return config;
// },function(error){
//     return Promise.reject(error);
// });
