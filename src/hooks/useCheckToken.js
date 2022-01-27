

export const useCheckToken = () => {

    const initialState = {
        status: 'checking',
        token: null,
        user: null,
        logged: false,
        errorMessage: ''
    }

    const initCheckToken = () => {
       return JSON.parse( localStorage.getItem('tokenQih')) || initialState;

    }


    return [
        initCheckToken
    ]
     
}
