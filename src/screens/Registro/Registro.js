import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registrarUsuario } from '../../actions/registerActions';
import { NavbarLogin } from '../../components/navbar/NavbarLogin';
import { useForm } from '../../hooks/useForm';

export const Registro = () => {


    const dispatch = useDispatch()


    const { loading, msgError } = useSelector( state => state.ui )

    
    const [ formState, handleInputName ] = useForm({
        username: '',
        email: '',
        password: ''
    });


    const registro = (event) => {
        event.preventDefault();

        dispatch( registrarUsuario( { username: username,  email: email, password: password } ) )
    }

  return (
      <>
         <NavbarLogin/>

         <div className="container">
                <div className="row" style={{"justifyContent": "center"}}>
                    <div className="col-md-6 ">
                        <div className="login-form bg-light mt-5 p-4">
                            <form className="row g-3" onSubmit={registro}>
                                <h4>Registrarme</h4>
                                <div className="col-12">
                                    <input type="text" onChange={handleInputName} name="username" className="form-control" placeholder="Nombre" required />
                                </div>
                                <div className="col-12">
                                    <input type="text" onChange={handleInputName} name="email" className="form-control" placeholder="Email" required />
                                </div>
                                <div className="col-12">
                                    <input type="password" onChange={handleInputName} name="password" className="form-control" placeholder="Password" required />
                                </div>
                                <div className="col-12">
                                    <button type="submit" className="btn btn-dark float-end">Registrarme</button>
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
  )
};
