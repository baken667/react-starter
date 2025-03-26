import { Suspense } from 'react';
import { Link, Outlet } from 'react-router';

export default function AuthLayout() {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Go home</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}
