import React from 'react';
import { Route } from 'react-router-dom';
import { Login } from '../screens/Login/Login';
import { Registro } from '../screens/Registro/Registro';

export const DashboardPublicRoutes = () => {
  return (

     <div>

         <Route>
             <Route exact path="/login" element={ <Login /> } />
             <Route exact path="/registro" element={ <Registro /> } />
         </Route>
     </div>

  );
};
