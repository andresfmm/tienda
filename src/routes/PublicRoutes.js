import React from 'react';
import { Navigate } from 'react-router-dom';

export const PublicRoutes = ({ children }) => {
  
   const  da = false;
   return da
          ? <Navigate to="/app" />
          : children;
};
