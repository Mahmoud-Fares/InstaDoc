import { toast } from 'sonner';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { AUTH_API } from '@/features/auth/api';
import { AuthState } from '@/features/auth/types';
import { DOCTORS } from '@/features/doctor';
import { PATIENTS } from '@/features/patient';

export const useAuthStore = create<AuthState>()(
   persist(
      (set) => ({
         currentUser: null,
         token: '',
         // todo: we need to remove this (but for now we will use it)
         users: [...PATIENTS, ...DOCTORS],

         isLoading: false,

         register: async ({ navigate, ...props }) => {
            set({ isLoading: true });

            try {
               const { data: authData } = await AUTH_API.register(props);
               set({
                  token: authData.token,
               });

               const { data: userData } = await AUTH_API.me();
               set({
                  currentUser: userData,
                  isLoading: false,
               });

               toast.success('Successfully signed up!');

               navigate('/dashboard', { viewTransition: true });
            } catch (error: any) {
               throw error;
            } finally {
               set({ isLoading: false });
            }
         },

         login: async ({ email, password, navigate }) => {
            set({ isLoading: true });

            try {
               const { data: authData } = await AUTH_API.login({
                  email,
                  password,
               });
               set({
                  token: authData.token,
               });

               const { data: userData } = await AUTH_API.me();
               set({
                  currentUser: userData,
                  isLoading: false,
               });

               toast.success('Successfully logged in!');

               navigate('/dashboard', { viewTransition: true });
            } catch (error: any) {
               throw error;
            } finally {
               set({ isLoading: false });
            }
         },

         logout: async () => {
            try {
               await AUTH_API.logout();
               set({ currentUser: null, token: '' });
               toast.success('Logged out successfully');
            } catch (error: any) {
               throw error;
            }
         },
      }),
      {
         name: 'auth-storage',

         partialize: (state) => ({
            currentUser: state.currentUser,
            token: state.token,
         }),
      }
   )
);
