import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { startLogOut } from '../../actions/authActions';
import { useCheckToken } from '../../hooks/useCheckToken';




export const Navbar = () => {

    const dispatch = useDispatch();
    
    const [ initCheckToken ] = useCheckToken()
    const [nameuser, setNameUser] = useState('')

    useEffect(() => {
        
        async function checkTokenName() {
            const token = await initCheckToken();
            setNameUser(token.usuario.nombre)
        }
        checkTokenName()

    }, [initCheckToken])
    
     
    const handleLogOut = () => {
        dispatch( startLogOut() );
    }


    return (
        <nav className="navbar navbar-expand-lg py-4 navbar-dark color-base-1">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Documentacion manuales</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarScroll">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    {/* <li className="nav-item">
                        <NavLink exact className="nav-link" activeClassName="active" to="/">Inicio</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact className="nav-link" activeClassName="active" to="/software">Software</NavLink>
                    </li>
                   <li className="nav-item">
                        <NavLink exact className="nav-link" activeClassName="active" to="/bossanova">Bossanova</NavLink>
                   </li>
                   <li className="nav-item">
                        <NavLink exact className="nav-link" activeClassName="active" to="/eclipse">Eclipse</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact className="nav-link" activeClassName="active" to="/hotel-pance-122">Hotel pance122</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact className="nav-link" activeClassName="active" to="/o2">O2</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact className="nav-link" activeClassName="active" to="/sol-y-luna">Sol y luna</NavLink>
                    </li> */}
                    
                </ul>

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
