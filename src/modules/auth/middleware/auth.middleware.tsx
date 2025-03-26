import { Navigate, Outlet } from 'react-router';
import { useAuthStore } from '../store';

export default function AuthMiddleware() {
  const { user } = useAuthStore();

  return user ? <Outlet /> : <Navigate to="/login" />;
}
