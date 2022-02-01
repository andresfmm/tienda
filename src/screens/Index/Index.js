import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { finishLoading, startLoading } from '../../actions/uiAction';
import requestApiTest from '../../api/requestsTest';
import { ModalProductos } from '../../components/modalproductos/ModalProductos';
import { Preload } from '../../components/preloads/Preload';
import { CardShop } from '../../components/shop/CardShop';
import { useStorage } from '../../hooks/useStorage';


export const Index = () => {

  const dispatch = useDispatch();

  const { loading } = useSelector( state => state.ui );
  const  { statuschange } = useSelector( state => state.storage );

  const [datacard, setDataCard] = useState([]);

  const { leerLsStorage, guardarLStorage, showCarritoStorage } = useStorage();

  const [listacarrito, setListaCarrito] = useState([]);


  

  useEffect(() => {
     getDataShop();
  }, []);

  useEffect(() => {
     
      if (statuschange) {
          mostrarListaCarrito();
      }
      
  }, [statuschange]);


  const getDataShop = async () => {
      
        try {
            
            dispatch( startLoading() )
               const { data} = await requestApiTest.get('/products');
               setDataCard(data)
            dispatch( finishLoading() )  
        } catch (error) {
           console.log(error)  
        } 
  }


  const mostrarListaCarrito = () => {
       try {
           
         const data = showCarritoStorage();
         setListaCarrito(data);
      
       } catch (error) {
          console.log(error)
       }
  }

  if (loading) {
      return (
         <Preload/>
      )
  }

  
  
  
  return (
      <>
         <h1 className='titulo-productos-tienda'>Productos</h1>
         

         <div className='container'>
              <CardShop data={datacard}/>
         </div>

         <ModalProductos lista={listacarrito}/>
      </>
  );
};
