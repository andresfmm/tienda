import { types } from "../types/types";


const initialStateAuth = {
    token: null,
    status: 'un-authenticated',
    user: {
        userName : '',
        email: '',
        isAdmin: false
     }

}


export const authReducer = ( state = initialStateAuth, action ) => {
      
      switch ( action.type ) {
          
            case types.login:
                return {
                  ...state,
                 token: action.payload.token,
                 status: action.payload.status,
                 user: action.payload.usuario,
               }
            case types.logout:
                return {
                ...state,
                token: action.payload.token,
                status: action.payload.status,
                user: action.payload.usuario,
                }
              
          default:
              return state;
      }
}
