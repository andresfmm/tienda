import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createProduct } from '../../actions/gestionProductosActions';
import { Preload } from '../../components/preloads/Preload';
import { sweetAlerta } from '../../helpers/helpers';
import { useForm } from '../../hooks/useForm';
import { CrearProductoTheme } from '../../themes/CrearProductoTheme';
import { RegistroTheme } from '../../themes/RegistroTheme';

export const CrearProducto = () => {

  const dispatch = useDispatch()

  const [srcimage, setSrcImage] = useState('');
  const [file, setFile] = useState(null);


  const { loading, msgError } = useSelector( state => state.ui )

  const [ formState, handleInputName ] = useForm({
    product_imagen: '',
    product_name: '',
    product_description: '',
    product_price: '',
    
  });

  const { product_imagen, product_name, product_description, product_price } = formState;


  const crearProducto = async(event) => {
    event.preventDefault();

   const result = await dispatch( createProduct( { product_imagen: file, product_name, product_description, product_price } ) );
   
   if (result.ok) {
    
    setSrcImage( '' )
    let alerta = {
      title: 'Producto creado',
      footer: 'test tienda react y node by meza',
      icon: 'success',
      text: result.msg
    }
    await sweetAlerta(alerta);
     
   } else {

    let alerta = {
      title: 'Error',
      footer: 'test tienda react y node by meza',
      icon: 'error',
      text: result.msg
    }
    await sweetAlerta(alerta);
   }
   
  }


  const handleChange = (event) => {
    setFile( event.target.files[0] )
    setSrcImage( URL.createObjectURL(event.target.files[0]) )
  }
  

  if (loading) {
    return (
       <Preload/>
    )
  }

  return (
      <>
          <div className="container">
                <div style={CrearProductoTheme.main}>
                    <div className="col-md-12 ">
                        <div className="login-form  mt-5 p-4" style={RegistroTheme.bg_from_color}>
                            <form className="row g-3" onSubmit={crearProducto} autoComplete="off">
                                <h4>Crear producto</h4>
                                <div className='col-md-6'>
                                  <div className="col-12 m-10">
                                    <input className="form-control" type="file" name="product_imagen" id="formFile" onChange={handleChange} required/>
                                  </div>
                                  <div className="col-12 m-10">
                                      <input type="text" onChange={handleInputName} name="product_name" className="form-control" placeholder="Nombre producto" required />
                                  </div>
                                  <div className="col-12 m-10">
                                      <textarea  onChange={handleInputName} name="product_description" className="form-control" placeholder="descripcion producto" required>
                                          
                                      </textarea>
                                  </div>
                                  <div className="col-12 m-10">
                                      <input type="text" onChange={handleInputName} name="product_price" className="form-control" placeholder="Precio producto" required />
                                  </div>
                                  <div className="col-12 m-10">
                                      <button type="submit" className="btn btn-dark float-end">Crear producto</button>
                                  </div>
                                </div>
                                <div className='col-md-6' style={CrearProductoTheme.center}>
                                    <img  src={srcimage} style={CrearProductoTheme.img} />
                                </div>
                            </form>
                            {
                                msgError ?
                                <div className="alert alert-warning alert-dismissible fade show color-base-1 m-t-2" role="alert">
                                   <strong className='white'>{msgError}</strong>
                                   <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                </div> : ''

                            }
                            
                            <hr className="mt-4" />
                            {/* <div className="col-12">
                                <p className="text-center mb-0">Olvidaste tu contrseña? <a href="#">Recuperar contraseña</a></p>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
      </>
  );
};
