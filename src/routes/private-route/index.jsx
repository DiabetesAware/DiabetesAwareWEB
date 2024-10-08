import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { authService } from '@/config';

const PrivateRoute = () => {
  if (!authService.isAuthorized()) {
    return <Navigate to="/unauthorized" replace />;
  }
  return <Outlet />;
};

export default PrivateRoute;
