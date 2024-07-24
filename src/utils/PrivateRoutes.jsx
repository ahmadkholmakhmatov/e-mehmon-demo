import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoutes = ({ auth }) => {
  const authentication = auth;
  return authentication.token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
