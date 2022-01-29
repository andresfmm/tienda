import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { finishLoading, startLoading } from '../../actions/uiAction';
import requestApiTest from '../../api/requestsTest';
import { Preload } from '../../components/preloads/Preload';
import { CardShop } from '../../components/shop/CardShop';
import { useStorage } from '../../hooks/useStorage';


export const Index = () => {

  const dispatch = useDispatch();
  const { loading } = useSelector( state => state.ui );
  const [datacard, setDataCard] = useState([]);

  const { leerLsStorage, guardarLStorage } = useStorage();

  useEffect(() => {
     getDataShop();
     console.log( leerLsStorage() )
  }, []);


  const getDataShop = async () => {
      
        try {
            
            dispatch( startLoading() )
               const { data} = await requestApiTest.get('/products')
               console.log(data)
               setDataCard(data)
            dispatch( finishLoading() )  
        } catch (error) {
           console.log(error)  
        } 
  }

  if (loading) {
      return (
         <Preload/>
      )
  }

  const epa = () => {
     guardarLStorage()
  }
  
  
  return (
      <>
         <h1 className='titulo-productos-tienda'>Productos</h1>
         

         <div className='container'>
              <CardShop data={datacard}/>
         </div>
      </>
  );
};
