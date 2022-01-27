import React from 'react';
import {  Routes, Route } from 'react-router-dom';


import { Navbar } from '../components/navbar/Navbar';
import { Test } from '../screens/Test/Test';


export const DashboardRoutes = () => {
    return (
        <div>

             <Navbar/>  
             
             
              <Routes>
                  <Route exact path="/app" element={ <Test />} />
              </Routes>
           </div>   
    )
    
}
