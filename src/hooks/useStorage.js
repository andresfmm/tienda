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

           if ( LsStorage.length > 0) {
                 
                  let exist = false;
                  for (let i = 0; i < LsStorage.length; i++) {
                        if ( LsStorage[i].code == data.code ) {
                              actualizarLocasStorageSumar(i, data)
                              exist = true;
                        }
                  }

                  if (!exist) {
                        saveLocalStorage(data)
                  }
                  
                  

           }else{
                 
                saveLocalStorage(data); 
           }
           
           

     }

     const saveLocalStorage = (storage) => {
           
           let LsStorage = leerLsStorage();
           LsStorage.push(storage);
           localStorage.setItem(keyLStorageName(), JSON.stringify(LsStorage));
     }

     const actualizarLocasStorageSumar = (position, data) => {
          
           let LsStorage = leerLsStorage();
           let originalstorage = LsStorage[position];
           originalstorage.cantidad = originalstorage.cantidad + 1;
           localStorage.setItem(keyLStorageName(), JSON.stringify(LsStorage));
     }


     const actualizarLocasStorageRestar = (position, data) => {
          
      let LsStorage = leerLsStorage();
      let originalstorage = LsStorage[position];
      originalstorage.cantidad = originalstorage.cantidad - 1;
      localStorage.setItem(keyLStorageName(), JSON.stringify(LsStorage));
     }


     const actualizarLocasStorageSuma = (code) => {
          
      let LsStorage = leerLsStorage();

      for (let i = 0; i < LsStorage.length; i++) {
            if ( LsStorage[i].code == code ) {
                  console.log('pepepep suma')
                  actualizarLocasStorageSumar(i, code);
            }
      }

}

     const actualizarLocasStorageResta = (code) => {
          
            let LsStorage = leerLsStorage();
            console.log('pepepep resta')

            for (let i = 0; i < LsStorage.length; i++) {
                  if ( LsStorage[i].code == code ) {
                        actualizarLocasStorageRestar(i, code);
                  }
            }
     }


     const showCarritoStorage = () => {

           let LsStorage = leerLsStorage();

           if ( LsStorage.length > 0 ) {
                 
                 
           }

           return LsStorage;
     }



     const cantidadItems = () => {

           let LsStorage = leerLsStorage();

           let suma = 0;
           let items = LsStorage.forEach( element => {
                 suma += element.cantidad
           });

           return suma;
     }
      
      return {
            leerLsStorage,
            adicionarLocaStorage,
            showCarritoStorage,
            cantidadItems,
            actualizarLocasStorageSuma,
            actualizarLocasStorageResta
      }
};


