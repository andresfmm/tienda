import axios from 'axios';
import { useCheckToken } from '../hooks/useCheckToken';

const baseURL = 'http://localhost:8082/api/v1';

const requestApi = axios.create({ baseURL });

requestApi.interceptors.request.use(
    async(config) => {

        const [ initCheckToken ] = useCheckToken()
        
        
        const token = initCheckToken().token;

        if ( token !== '' || token !== null || token !== undefined ) {
            config.headers['Authorization'] = 'Bearer '+token;
        }
       
        return config;
    }
);



export default requestApi;
