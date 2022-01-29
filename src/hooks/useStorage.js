import React, { useState } from 'react';
import { keyLStorageName } from '../env/env';


export const initialState = [];

export const useStorage = () => {
    
      const [lstorage, setLStorage] = useState([]);

      

      const leerLsStorage = () => {

            const lsStorage = JSON.parse( localStorage.getItem(keyLStorageName()) ) || initialState;

            return lsStorage;
     }


     const  adicionarLocaStorage = (data) => {

           let LsStorage = leerLsStorage();

           for (let i = 0; i < LsStorage.length; i++) {
                if ( LsStorage[i].code == data.code ) {
                      
                }else{

                }
           }

     }
      
      return {
            leerLsStorage,
            adicionarLocaStorage
      }
};


