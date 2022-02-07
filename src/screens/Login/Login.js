import React from 'react';
import { useForm } from '../../hooks/useForm';
import { NavbarLogin } from '../../components/navbar/NavbarLogin';
import { loginEmailPassword } from '../../actions/authActions';
import { Preload } from '../../components/preloads/Preload';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { LoginTheme } from '../../themes/LoginTheme';






export const Login = () => {
    
    const dispatch = useDispatch()


    const { loading, msgError } = useSelector( state => state.ui )



    

    const [ formState, handleInputName ] = useForm({
        username: '',
        password: ''
    });


    const { username, password } = formState;

    const login = (event) => {
        event.preventDefault();
        dispatch( loginEmailPassword( { email: username, password: password } ) )
    }


    if (loading) {
        return (
            <Preload/>
        )
    }


    return (
        <>

           <NavbarLogin/>
            <div className="container">
                <div style={LoginTheme.main}>
                    <div className="col-md-6 "> 
                    <div className="login-form  mt-5 p-4" style={LoginTheme.bg_white}>
                            <form className="row g-3" onSubmit={login} >
                                <h4>Bienvenido</h4>
                                <div className="col-12">
                                    <input type="text" onChange={handleInputName} name="username" className="form-control" placeholder="Usuario" required />
                                </div>
                                <div className="col-12">
                                    <input type="password" onChange={handleInputName} name="password" className="form-control" placeholder="Password" required autoComplete="on"/>
                                </div>
                                <div className="col-12">
                                    <button type="submit" className="btn btn-dark float-end">Login</button>
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
}
