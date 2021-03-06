import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createOrder } from '../../actions/appActions';
import { sweetAlerta } from '../../helpers/helpers';
import { useForm } from '../../hooks/useForm';
import { useStorage } from '../../hooks/useStorage';





export const ModalProductos = ({lista}) => {

    const dispatch = useDispatch();

    const  { cantidaditemsheader } = useSelector( state => state.storage );

    const { loading, msgError } = useSelector( state => state.ui )

    const [ formState, handleInputName ] = useForm({
        direccion: ''
    });

    const { direccion } = formState;

    const [btnactive, setBtnActive] = useState(false)

    const { actualizarLocasStorageSuma, actualizarLocasStorageResta, varicarLocalStorage, ordenProductos } = useStorage()

  
    const sumar = (event) => {
        let cantidad = event.target.parentElement.querySelector('.total-modal');

        let cantidad_actual = parseInt(cantidad.textContent);
        let nueva_cantidad = cantidad_actual + 1;

        cantidad.textContent = nueva_cantidad;

        let code = event.target.getAttribute('attr-code');
        actualizarLocasStorageSuma(code)
    }

    const restar = (event) => {
        let cantidad = event.target.parentElement.querySelector('.total-modal');
    
        let cantidad_actual = parseInt(cantidad.textContent);

        if (cantidad_actual <= 0) return;

        let nueva_cantidad = cantidad_actual - 1;
        cantidad.textContent = nueva_cantidad;

        let code = event.target.getAttribute('attr-code');
        actualizarLocasStorageResta(code)
    }



    const vaciarCarrito = () => {
        dispatch( varicarLocalStorage() );

        document.querySelectorAll('#tbodymodal > tr').forEach( tr => tr.remove() );
    }


    const confirmarCompra = async() => {
          document.getElementById('cerrar_modal').click();
          const products = await ordenProductos();
          const create =  await dispatch( createOrder(direccion, products) )

          if (create.ok) {
            
            vaciarCarrito()
            let alerta = {
              title: 'Pedido creado',
              footer: 'test tienda react y node by meza',
              icon: 'success',
              text: create.msg
            }
            await sweetAlerta(alerta);
             
           } else {
        
            let alerta = {
              title: 'Error',
              footer: 'test tienda react y node by meza',
              icon: 'error',
              text: create.msg
            }
            await sweetAlerta(alerta);
           }
    }


    const checkCampo = (event) => {
        const text = event.target.value;
        (text !== '') ? setBtnActive(true) : setBtnActive(false);
        
    }


  return (
      <>

           <div className="modal fade" id="modapProductos" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog  modal-lg">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                            Mis productos 
                        </h5>
                        {
                            cantidaditemsheader  
                              ?
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                              :
                                ''
                        }
                    </div>
                    <br/> 
                    <button type="submit" className="btn btn-dark btn-vaciar-carrito" onClick={vaciarCarrito}>Vaciar carrito</button>
                    <div className="modal-body">
                    <table className="table">
                        <thead>
                            <tr>
                            <th scope="col">Imagen</th>
                            <th scope="col">Producto</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Precio</th>
                            </tr>
                        </thead>
                        <tbody id='tbodymodal'>
                            {
                                lista.map( (item) => 
                                   
                                <tr key={item.code}>
                                    <td>
                                      <img className='ancho-110' src={item.imagen} />
                                    </td>
                                    <td className='center-mitad'>{item.name}</td>
                                    <td className='center-mitad'>
                                        <span className='btn btn-dark btnrestar' attr-code={item.code} onClick={ restar }>-</span>
                                           <span className='total-modal'>{item.cantidad}</span>
                                        <span className='btn btn-dark btnsumar' attr-code={item.code} onClick={ sumar }>+</span>
                                    </td>
                                    <td className='center-mitad'>${item.price}</td>
                                </tr>
                                )
                            }
                        </tbody>
                        
                        </table>
                        <div className="col-12">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Escriba direccion de entrega</label>
                            <textarea name="direccion" className="form-control" id="exampleFormControlTextarea1" onKeyUp={checkCampo} onChange={handleInputName} rows="3" required></textarea>
                        </div>
                        
                            
                        
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" id="cerrar_modal">Cerrar</button>
                        {
                            btnactive ?
                              <button type="button" className="btn btn-dark" onClick={confirmarCompra}>Confirmar compra</button>
                            : 
                              <button type="button" className="btn btn-dark" disabled>Digite una direcion para confirmar</button>
                        }
                    </div>
                    </div>
                </div>
            </div>

                 
      </>
  );
};
