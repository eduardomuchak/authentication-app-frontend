import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { toast } from 'react-toastify';

export const RequireAuth = () => {
  const location = useLocation();

  const token = sessionStorage.getItem('@User');

  if (!token) {
    toast.error('Your session has expired. Please login again.');
  }

  return token ? (
    <Outlet />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
};
