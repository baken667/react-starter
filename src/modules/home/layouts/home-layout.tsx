import { Suspense } from 'react';
import { Link, Outlet } from 'react-router';

export default function HomeLayout() {
  return (
    <div>
      <header>
        <h1>Home Layout</h1>

        <nav>
          <ul>
            <li>
              <Link to="/login">Login</Link>
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
