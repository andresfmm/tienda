import React from 'react';
import { Navigate } from 'react-router-dom';

export const PrivateRoutes = ({ children }) => {
  
    const da = true;
    return da
           ? children
           : <Navigate to="/login" />;
};
