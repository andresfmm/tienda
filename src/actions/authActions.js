
import { types } from '../types/types';
import { finishLoading, startLoading, setError, removeError  } from './uiAction';
import requestApi from '../api/requestsApi';
import { keyLStorageName } from '../env/env';



export const loginEmailPassword = ( {email, password} ) => {
       
    return async( dispatch ) => {
          
          dispatch( startLoading() )

           
          const { data } = await requestApi.post('/login', { email, password});

          
          
          if (!data.logged) {
              dispatch( setError('Usuario o password incorrectos') )
          }else{
              dispatch( removeError() )
          }
          await localStorage.setItem(keyLStorageName(), JSON.stringify(data) );
          dispatch( setLogin(data) )
          
         
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
        await localStorage.setItem(keyLStorageName(), JSON.stringify(data) );
        dispatch( logout(data) )
        dispatch( finishLoading() )
      }
}




export const setLogin = (data) => {


    return {
        type: types.login,
        payload: {
            token:   data.token,
            logged:  data.logged,
            status:  data.status,
            usuario: data.usuario
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










