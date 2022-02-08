import React, {  useEffect, useState } from 'react';


import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";



import { Login } from '../screens/Login/Login';
import { Registro } from '../screens/Registro/Registro';
import { DashboardRoutes } from './DashboardRoutes';
import { Preload } from '../components/preloads/Preload';
import { useCheckToken } from '../hooks/useCheckToken';
import { useDispatch, useSelector } from 'react-redux';
import { PublicRoutes } from './PublicRoutes';
import { PrivateRoutes } from './PrivateRoutes';
import { setLogin } from '../actions/authActions';



export const AppRouter = () => {



    
    const status = useSelector( state => state.auth );
    const dispatch = useDispatch();

    const [checking, setChecking] = useState(true);
    
    const [ initCheckToken ] = useCheckToken()

    
   
    useEffect(() => {

        const token = initCheckToken();

        dispatch( setLogin(token) )

        setChecking(false)

        

    }, [])



    if (checking) {
        return(
            <Preload/>
        )
    }
  
    return ( 
        
        <BrowserRouter>
            <Routes>
                     
                    <Route  
                      path="/*"
                      element={
                        <PrivateRoutes>
                            <DashboardRoutes />
                        </PrivateRoutes>
                      }
                    />

                    <Route  
                       path="/login"
                       element={
                           <PublicRoutes>
                               <Login/>
                           </PublicRoutes>
                       }
                    />

                    <Route  
                       path="/registro"
                       element={
                           <PublicRoutes>
                               <Registro/>
                           </PublicRoutes>
                       }
                    />
                    
            </Routes>
        </BrowserRouter>
    )
}
