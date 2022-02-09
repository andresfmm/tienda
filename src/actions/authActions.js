
import { types } from '../types/types';
import { finishLoading, startLoading, setError, removeError  } from './uiAction';
import requestApi from '../api/requestsApi';
import { keyLStorageNameUser } from '../env/env';



export const loginEmailPassword = ( {email, password} ) => {
       
    return async( dispatch ) => {
          
          dispatch( startLoading() )
          dispatch( removeError() ) 

           
          const { data } = await requestApi.post('/login', { email, password});
                  
          
          if (data.ok) {

              await localStorage.setItem(keyLStorageNameUser(), JSON.stringify(data) );
              dispatch( setLogin(data) )
              
          }else{
              dispatch( setError(data.msg) )              
          }        
         
          dispatch( finishLoading() )
    }
}



export const startLogOut = () => {

      return async(dispatch) => {
        dispatch( startLoading() )
        
        const data = {
            ok: false,
            msg: '',
            token: '',
            status: 'un-authenticated',
            user: {
               userName : '',
               email: '',
               isAdmin: false
            }
        }
        await localStorage.setItem(keyLStorageNameUser(), JSON.stringify(data) );
        dispatch( logout(data) )
        dispatch( finishLoading() )
      }
}




export const setLogin = (data) => {


    return {
        type: types.login,
        payload: {
            token:   data.token,
            status:  data.status,
            usuario: data.user
        }
    }
}



export const logout = (data) => {
    return {
        type: types.logout,
        payload: {
            token:   data.token,
            status:  data.status,
            usuario: data.usuario
        }
    }
}










