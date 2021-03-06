import React from 'react';
import {  Routes, Route } from 'react-router-dom';


import { Navbar } from '../components/navbar/Navbar';
import { CrearProducto } from '../screens/CrearProducto/CrearProducto';
import { Index } from '../screens/Index/Index';
import { Test } from '../screens/Test/Test';


export const DashboardRoutes = () => {
    return (
        <div>

             <Navbar/>  
             
             
              <Routes>
                  <Route exact path="/app" element={ <Index />} />
                  <Route exact path="/crear-producto" element={ <CrearProducto />} />
              </Routes>
           </div>   
    )
    
}
