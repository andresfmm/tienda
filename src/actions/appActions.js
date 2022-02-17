import requestApi from "../api/requestsApi";
import { types } from "../types/types";
import { startLogOut } from '../actions/authActions';
import { finishLoading, startLoading } from "./uiAction";
import { useStorage } from "../hooks/useStorage";





export const createOrder = (direccion, orden) => {

    try {

        return async( dispatch ) => {
              
            dispatch( startLoading() )

        

            const data_orden = {
               direccion: direccion,
               orden: orden
            }
              const { data } = await requestApi.post('/orden', data_orden);

              dispatch( finishLoading() )
              return data;
        }
        
    } catch (error) {
        
    }
}
