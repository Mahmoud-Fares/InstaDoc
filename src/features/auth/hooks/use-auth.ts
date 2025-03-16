import { useNavigate } from 'react-router-dom';

import { LoginProps, useAuthStore } from '@/features/auth/store/auth-store';

export const useAuth = () => {
   const navigate = useNavigate();

   const currentUser = useAuthStore((state) => state.currentUser);
   const isLoading = useAuthStore((state) => state.isLoading);
   const storeLogin = useAuthStore((state) => state.login);
   const logout = useAuthStore((state) => state.logout);

   // Derived states
   const isAuthenticated = !!currentUser;

   const isDoctor = currentUser?.role === 'doctor';
   const isPatient = currentUser?.role === 'patient';

   const login = (credentials: Omit<LoginProps, 'navigate'>) =>
      storeLogin({ ...credentials, navigate });

   return {
      currentUser,
      isLoading,
      isAuthenticated,
      isDoctor,
      isPatient,

      login,
      logout,
   };
};
