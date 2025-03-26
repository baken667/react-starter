import { Route, Routes } from 'react-router';

import { HomePage } from './features/home/pages';
import { HomeLayout } from './features/home/layouts';
import { AuthLayout } from './features/auth/layouts';
import { LoginPage } from './features/auth/pages';

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

function App() {
  return <Router />;
}

export default App;
