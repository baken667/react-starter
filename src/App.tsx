import { Route, Routes } from 'react-router';
import { lazy } from 'react';

const HomePage = lazy(() => import('./pages/home'));

function Router() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
    </Routes>
  );
}

function App() {
  return <Router />;
}

export default App;
