import { Route, Routes } from 'react-router';

import { AuthLayout } from '@/modules/auth/layouts';
import { LoginPage } from '@/modules/auth/pages';
import { HomeLayout } from '@/modules/home/layouts';
import { HomePage } from '@/modules/home/pages';

function Router() {
  return (
    <Routes>
      <Route element={<HomeLayout />}>
        <Route index element={<HomePage />} />
      </Route>
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<LoginPage />} />
      </Route>
    </Routes>
  );
}

export default Router;
