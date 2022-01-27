import React, { useEffect, useState } from 'react';
import requestApiTest from '../../api/requestsTest';
import { CardShop } from '../../components/shop/CardShop';

export const Index = () => {

  
  const [datacard, setDataCard] = useState([]);

  useEffect(() => {
     getDataShop();
  }, []);


  const getDataShop = async () => {
      
        try {
            const { data} = await requestApiTest.get('/products')
            console.log(data)
            setDataCard(data)
        } catch (error) {
           console.log(error)  
        } 
  }
  
  return (
      <>
         <h1>estamos en index</h1>

         <div className='container'>
              <CardShop data={datacard}/>
         </div>
      </>
  );
};
