import requestApi from "../api/requestsApi";
import { types } from "../types/types";
import { finishLoading, startLoading, setError, removeError  } from './uiAction';



export const createProduct = ({ product_imagen, product_name, product_description, product_price }) => {

      try {

         return async ( dispatch ) => {

             dispatch( startLoading() );

                let formData = new FormData();

                formData.append('archivo', product_imagen);
                formData.append('product_name', product_name);
                formData.append('product_description', product_description);
                formData.append('product_price', product_price);

                const { data } = await requestApi.post('/product/', formData);
                
                dispatch( finishLoading() );

                return data;

             

         }
          
      } catch (error) {
          alert()
          console.log('crearProducto ', error);
      }
}