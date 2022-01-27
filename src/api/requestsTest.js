import axios from 'axios';
import { useCheckToken } from '../hooks/useCheckToken';

const baseURL = 'https://fakestoreapi.com';

const requestApiTest = axios.create({ baseURL });

requestApiTest.interceptors.request.use(
    async(config) => {

       
        return config;
    }
);


export default requestApiTest;
