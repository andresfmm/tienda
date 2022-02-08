import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const PublicRoutes = ({ children }) => {
  
   const { status } = useSelector( state => state.auth );

   console.log('public mommm ', status)

   return status == 'authenticated'

          ? <Navigate to="/app" /> 
          : children;
};
