import { Route, Routes } from 'react-router';

import { AuthLayout } from '@/modules/auth/layouts';
import { LoginPage } from '@/modules/auth/pages';
import { HomeLayout } from '@/modules/home/layouts';
import { HomePage } from '@/modules/home/pages';
import GuestMiddleware from '@/modules/auth/middleware/guest.middleware';
import AuthMiddleware from '@/modules/auth/middleware/auth.middleware';
import { ProfilePage } from '@/modules/settings/pages';

function Router() {
  return (
    <Routes>
      {/* Public routes */}
      <Route element={<HomeLayout />}>
        <Route index element={<HomePage />} />
      </Route>

      {/* Guest routes */}
      <Route element={<GuestMiddleware />}>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginPage />} />
        </Route>
      </Route>

      {/* Protected routes */}
      <Route element={<AuthMiddleware />}>
        <Route element={<HomeLayout />}>
          <Route path="/profile" element={<ProfilePage />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default Router;
