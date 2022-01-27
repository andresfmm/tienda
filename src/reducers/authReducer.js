import { types } from "../types/types";


const initialStateAuth = {
    token: null,
    logged: false,
    status: '',
    usuario: {
        nombre: '',
        email: ''
    }
}


export const authReducer = ( state = initialStateAuth, action ) => {
      
      switch ( action.type ) {
          
            case types.login:
                return {
                  ...state,
                 token: action.payload.token,
                 status: action.payload.status,
                 user: action.payload.user,
                 logged: action.payload.logged
               }
            case types.logout:
                return {
                ...state,
                 token: action.payload.token,
                 status: action.payload.status,
                 user: action.payload.user,
                 logged: action.payload.logged
                }
              
          default:
              return state;
      }
}
