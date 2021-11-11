import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../App';

const PrivateRoute = () => {
  const {auth} = useContext(AuthContext)
  return auth ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute

