import requestApi from "../api/requestsApi";
import { types } from "../types/types";
import { startLogOut } from '../actions/authActions';
import { finishLoading, startLoading } from "./uiAction";

export const getListaSoftware = () => {

    try {

        return async( dispatch ) => {
            
              const { data } = await requestApi.post('/softwares');

              dispatch( startLoading() )

              if ( data.status === types.userNotFound) {
                  dispatch( startLogOut() )
              }

               dispatch( finishLoading() )
              return data;
        }
        
    } catch (error) {
        
    }
}



export const getManualesManualesVideo = (url) => {

    try {

        return async( dispatch ) => {
            
              const { data } = await requestApi.post(url);

             

              dispatch( startLoading() )

              if ( data.status === types.userNotFound) {
                  dispatch( startLogOut() )
              }

              dispatch( finishLoading() )
              return data;
        }
        
    } catch (error) {
        
    }
}
