import React, { useEffect } from 'react';

export const ModalProductos = ({lista}) => {

  
  

  return (
      <>

           <div className="modal fade" id="modapProductos" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog  modal-lg">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                    <table class="table">
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
                                   
                                <tr>
                                    <td>
                                      <img className='ancho-110' src={item.imagen} />
                                    </td>
                                    <td className='center-mitad'>{item.name}</td>
                                    <td className='center-mitad'>{item.cantidad}</td>
                                    <td className='center-mitad'>${item.price}</td>
                                </tr>
                                )
                            }
                        </tbody>
                        </table>
                        
                            
                        
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                    </div>
                </div>
            </div>

                 
      </>
  );
};
