import { useAuthStore } from '@/modules/auth/store';
import { Suspense } from 'react';
import { Link, Outlet } from 'react-router';

export default function HomeLayout() {
  const { user } = useAuthStore();

  return (
    <div>
      <header>
        <h1>Home Layout</h1>

        <nav>
          <ul>
            {user ? (
              <>
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
                <li>
                  <button
                    onClick={() => useAuthStore.getState().setUser(undefined)}
                  >
                    logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login">Login</Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}
