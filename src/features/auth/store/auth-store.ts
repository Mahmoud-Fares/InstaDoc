import { NavigateFunction } from 'react-router-dom';
import { toast } from 'sonner';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { wait } from '@/shared/lib/utils';

import { DOCTORS, Doctor } from '@/features/doctor';
import { PATIENTS, Patient } from '@/features/patient';

type AuthUser = Patient | Doctor;

export type LoginProps = {
   email: string;
   password: string;
   navigate: NavigateFunction;
};

type AuthState = {
   currentUser: Omit<AuthUser, 'password'> | null;
   users: AuthUser[];

   isLoading: boolean;

   login: ({ email, password, navigate }: LoginProps) => Promise<void>;
   logout: () => void;
};

export const useAuthStore = create<AuthState>()(
   persist(
      (set, get) => ({
         currentUser: null,
         users: [...PATIENTS, ...DOCTORS],

         isLoading: false,

         login: async ({ email, password, navigate }) => {
            set({ isLoading: true });

            await wait(1000);

            const authenticatedUser = get().users.find(
               (user) => user.email === email && user.password === password
            );

            if (authenticatedUser) {
               set({
                  currentUser: authenticatedUser,
                  isLoading: false,
               });

               toast.success('Successfully logged in!');

               navigate('/dashboard');
            } else {
               set({ isLoading: false });

               toast.error('Invalid email or password');
            }
         },

         logout: () => {
            set({ currentUser: null });

            toast.success('Logged out successfully');
         },
      }),
      {
         name: 'auth-storage',

         partialize: (state) => ({
            currentUser: state.currentUser,
            users: state.users,
         }),
      }
   )
);
