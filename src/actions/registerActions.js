import requestApi from "../api/requestsApi";
import { keyLStorageName } from "../env/env";
import {  loginEmailPassword, setLogin } from "./authActions";
import { finishLoading, removeError, setError, startLoading } from "./uiAction";



export const registrarUsuario = ( { username, email, password} ) => {

      return async ( dispatch ) => {
          
           dispatch( startLoading() )

           dispatch( removeError() )

           const { data } = await requestApi.post('/resigtro', { username, email, password })


           if (data.ok) {

               dispatch( loginEmailPassword( { email: email, password: password } ) )
                    
                    
                dispatch( finishLoading() )
               
           }else{

              dispatch( setError(data.msg) )
           }

           dispatch( finishLoading() )

      }
}