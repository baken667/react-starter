import { Navigate, Outlet } from 'react-router';
import { useAuthStore } from '../store';

export default function GuestMiddleware() {
  const { user } = useAuthStore();

  return user ? <Navigate to="/" /> : <Outlet />;
}
