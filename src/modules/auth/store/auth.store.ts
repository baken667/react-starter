import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { User } from '@/shared/types/user.type';

interface AuthState {
  user?: User;
  setUser: (user?: User) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: undefined,
      setUser: (user?: User) => set({ user }),
    }),
    {
      name: 'auth',
      partialize: (state) => ({ user: state.user }),
    },
  ),
);
