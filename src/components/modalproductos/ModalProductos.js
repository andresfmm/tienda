import React, { useEffect, useState } from 'react';
import { useStorage } from '../../hooks/useStorage';





export const ModalProductos = ({lista}) => {

    const { actualizarLocasStorageSuma, actualizarLocasStorageResta } = useStorage()

  
    const sumar = (event) => {
        let code = event.target.getAttribute('attr-code');
        actualizarLocasStorageSuma(code)
    }

    const restar = (event) => {
        let code = event.target.getAttribute('attr-code');
        actualizarLocasStorageResta(code)
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
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
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
                        <tbody>
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
                        
                            
                        
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        <button type="button" className="btn btn-dark">Confirmar compra</button>
                    </div>
                    </div>
                </div>
            </div>

                 
      </>
  );
};
