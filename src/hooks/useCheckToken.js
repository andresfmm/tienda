import { keyLStorageNameUser } from "../env/env";


export const useCheckToken = () => {

    const initialState = {
        token: null,
        status: 'un-authenticated',
        user: {
            userName : '',
            email: '',
            isAdmin: false
         }
    
    }

    const initCheckToken = () => {
       return JSON.parse( localStorage.getItem( keyLStorageNameUser() )) || initialState;

    }


    return [
        initCheckToken
    ]
     
}
