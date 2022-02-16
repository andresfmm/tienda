import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { startLogOut } from '../../actions/authActions';
import { useCheckToken } from '../../hooks/useCheckToken';
import { useStorage } from '../../hooks/useStorage';




export const Navbar = () => {

    const dispatch = useDispatch();
    
    const [ initCheckToken ] = useCheckToken();

    const [nameuser, setNameUser] = useState('');

    const  { showModalCarrito } = useStorage();
  
      

    const  { cantidaditemsheader } = useSelector( state => state.storage );

    const { actualizarStoreCantidadItems } = useStorage();


    useEffect(() => {
        
        async function checkTokenName() {
            const token = await initCheckToken();
            setNameUser(token.user.userName)
        }
        checkTokenName()

    }, [initCheckToken]);


    useEffect(() => {
        dispatch( actualizarStoreCantidadItems() );
    }, []);

        
    

    const showDataModal = () => {
        dispatch( showModalCarrito() );
    }
        
     
    const handleLogOut = () => {
        dispatch( startLogOut() );
        
    }
    


    return (
        <nav className="navbar navbar-expand-lg py-4 navbar-dark color-base-1">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/app">Tienda</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarScroll">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <NavLink  className="nav-link"  to="/crear-producto">Crear productos</NavLink>
                    </li>          
                </ul>
                 <li  className="nav-link icon-carrito"  data-bs-toggle="modal" data-bs-target="#modapProductos" onClick={showDataModal}>
                 <span className='cantidad-en-carrito'>{cantidaditemsheader}</span>
                      <i className="bi bi-cart3">
                          
                      </i>
                 </li>
                <ul className="navbar-nav text-center ">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle navbar-brand txt-negro-oficial text-capitalize txt-navbar-links" href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            {nameuser}
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li onClick={handleLogOut}><a className="dropdown-item text-capitalize" href="/" >Cerrar session</a></li>
                        </ul>
                    </li>
                </ul>

                </div>
            </div>
        </nav>
    )
}
