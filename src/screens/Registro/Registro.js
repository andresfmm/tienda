import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registrarUsuario } from '../../actions/registerActions';
import { NavbarLogin } from '../../components/navbar/NavbarLogin';
import { useForm } from '../../hooks/useForm';
import { RegistroTheme } from '../../themes/RegistroTheme';

export const Registro = () => {


    const dispatch = useDispatch()


    const { loading, msgError } = useSelector( state => state.ui )

    
    const [ formState, handleInputName ] = useForm({
        username: '',
        email: '',
        password: ''
    });

    const { username, email, password } = formState;


    const registro = (event) => {
        event.preventDefault();

        dispatch( registrarUsuario( { username: username,  email: email, password: password } ) )
    }

  return (
      <>
         <NavbarLogin/>

         <div className="container">
                <div style={RegistroTheme.main}>
                    <div className="col-md-6 ">
                        <div className="login-form  mt-5 p-4" style={RegistroTheme.bg_from_color}>
                            <form className="row g-3" onSubmit={registro} autoComplete="off">
                                <h4>Registrarme</h4>
                                <div className="col-12">
                                    <input type="text" onChange={handleInputName} name="username" className="form-control" placeholder="Nombre" required />
                                </div>
                                <div className="col-12">
                                    <input type="text" onChange={handleInputName} name="email" className="form-control" placeholder="Email" required />
                                </div>
                                <div className="col-12">
                                    <input type="password" onChange={handleInputName} name="password" className="form-control" placeholder="Password" required autoComplete="on" />
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
