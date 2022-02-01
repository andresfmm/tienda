import { types } from "../types/types";

const initialState = {
    cantidaditemsheader: 0,
    statuschange: false,
    totalpagar: 0
}

export const storageReducer = ( state = initialState, action ) => {
   
      switch ( action.type ) {
          case types.changeStore:
               return{
                   ...state,
                   cantidaditemsheader: action.payload.cantidaditemsheader
                }
          case types.showModal:
                return{ 
                    ...state,
                    statuschange: action.payload.statuschange,
                }
      
          default:
              return state;
      }
};
