import requestApi from "../api/requestsApi";
import { keyLStorageName } from "../env/env";
import {  setLogin } from "./authActions";
import { finishLoading, removeError, setError, startLoading } from "./uiAction";



export const registrarUsuario = ( { username, email, password} ) => {

      return async ( dispatch ) => {
          
           dispatch( startLoading() )

           const { data } = await requestApi('/resigtro', { username, email, password })

           if (data.exist) {
               dispatch( setError('Este email ya se encuentra registrado') )
           }else if(data.ok){

               dispatch( removeError() )
               await localStorage.setItem(keyLStorageName(), JSON.stringify(data) );
                dispatch( setLogin(data) )
                
                
                dispatch( finishLoading() )
           }

      }
}