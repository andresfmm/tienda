import React, {  useEffect, useState } from 'react';


import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";



import { Login } from '../screens/Login/Login';
import { DashboardRoutes } from './DashboardRoutes';
import { Preload } from '../components/preloads/Preload';
import { useCheckToken } from '../hooks/useCheckToken';
import { useSelector } from 'react-redux';
import { PublicRoutes } from './PublicRoutes';
import { PrivateRoutes } from './PrivateRoutes';



export const AppRouter = () => {



    const { logged } = useSelector(state => state.auth )

    const [checking, setChecking] = useState(false);
    const [isLogged,   setIsLogged] = useState(false)
    
    const [ initCheckToken ] = useCheckToken()

    
   
    useEffect(() => {

        const token = initCheckToken();

        if (!token.logged){
            setIsLogged(token.logged)
            setChecking(false)
        }

        setIsLogged(token.logged)
        setChecking(false)

        

    }, [logged, initCheckToken])


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
                        <PublicRoutes>
                            <DashboardRoutes />
                        </PublicRoutes>
                    }
                    />

                    <Route  
                       path="/login"
                       element={
                           <PrivateRoutes>
                               <Login/>
                           </PrivateRoutes>
                       }
                    />
                    
            </Routes>
        </BrowserRouter>
    )
}
