import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { keyLStorageName } from '../env/env';
import { types } from '../types/types';


export const initialState = [];

export const useStorage = () => {
    

      const dispatch =  useDispatch();

    

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
                  
                  dispatch( actualizarStoreCantidadItems() );

           }else{
                 
                saveLocalStorage(data); 
                dispatch( actualizarStoreCantidadItems() );
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
            dispatch( actualizarStoreCantidadItems() );
      }



      const actualizarLocasStorageResta = (code) => {
          
            let LsStorage = leerLsStorage();
            console.log('pepepep resta')

            for (let i = 0; i < LsStorage.length; i++) {
                  if ( LsStorage[i].code == code ) {
                        actualizarLocasStorageRestar(i, code);
                  }
            }

            dispatch( actualizarStoreCantidadItems() );
      }


     const showCarritoStorage = () => {

           let LsStorage = leerLsStorage();
          
            setTimeout(() => {
                  dispatch( changeCarrito() );
            }, 1500);

           return LsStorage;
     }



     const cantidadItems = () => {

           let LsStorage = leerLsStorage();

           let suma = 0;
           LsStorage.forEach( element => {
                 suma += element.cantidad
           });

           return suma;
     }



      const actualizarStoreCantidadItems = () => {

           return {
                 type: types.changeStore,
                 payload: {
                      cantidaditemsheader: cantidadItems()
                 }
           }
      }


      const varicarLocalStorage = () => {

            localStorage.setItem(keyLStorageName(), '[]');
            return {
                  type: types.changeStore,
                  payload: {
                       cantidaditemsheader: 0
                  }
            }
      }



      const showModalCarrito = () => {
            return {
                  type: types.showModal,
                  payload: {
                        statuschange: true
                  }
            }
      }


      const changeCarrito = () => {
            return {
                  type: types.showModal,
                  payload: {
                        statuschange: false
                  }
            }
      }
      
      return {
            leerLsStorage,
            adicionarLocaStorage,
            showCarritoStorage,
            cantidadItems,
            actualizarLocasStorageSuma,
            actualizarLocasStorageResta,
            actualizarStoreCantidadItems,
            varicarLocalStorage,
            showModalCarrito
      }
};


