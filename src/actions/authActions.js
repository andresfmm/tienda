
import { types } from '../types/types';
import { finishLoading, startLoading, setError, removeError  } from './uiAction';
import requestApi from '../api/requestsApi';
import { keyLStorageNameUser } from '../env/env';



export const loginEmailPassword = ( {email, password} ) => {
       
    return async( dispatch ) => {
          
          dispatch( startLoading() )

           
        //   const { data } = await requestApi.post('/login', { email, password});
        const data = {
            ok: true,
            msg: '',
            token: 'token',
            status: 'authenticated',
            user: {
               userName : 'andres',
               email: 'andres230687@hotmail.com',
               isAdmin: true
            }
          }

          
          
          if (data.ok) {

              await localStorage.setItem(keyLStorageNameUser(), JSON.stringify(data) );
              dispatch( setLogin(data) )
              
          }else{
              dispatch( setError(data.msg) )
              dispatch( removeError() )
          }        
         
          dispatch( finishLoading() )
    }
}



export const startLogOut = () => {

      return async(dispatch) => {
        dispatch( startLoading() )
        
        const data = {
            token: null,
            logged: false,
            rol: '',
            usuario: {
                nombre: '',
                email: ''
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
            logged:  data.logged,
            status:  data.status,
            usuario: data.usuario
        }
    }
}










