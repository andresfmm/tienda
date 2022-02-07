import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const NavbarLogin = () => {
    return (
        <nav className="navbar navbar-expand-lg py-4 navbar-dark color-base-1">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Manuales</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarScroll">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <NavLink exact className="nav-link"  exact="true" to="/login">Login</NavLink>
                    </li>
                      &nbsp;&nbsp;&nbsp;
                    <li className="nav-item">
                        <NavLink exact className="nav-link"  exact="true" to="/registro">Registro</NavLink>
                    </li>
                    
                </ul>
                

                </div>
            </div>
        </nav>
    )
}
