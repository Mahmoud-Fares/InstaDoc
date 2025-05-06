import { useNavigate } from 'react-router-dom';

import { useAuthStore } from '@/features/auth/store/auth-store';
import {
   LoginCredentialsType,
   RegisterCredentialsType,
} from '@/features/auth/types';

export const useAuth = () => {
   const navigate = useNavigate();

   const currentUser = useAuthStore((state) => state.currentUser);
   const isLoading = useAuthStore((state) => state.isLoading);
   const storeRegister = useAuthStore((state) => state.register);
   const storeLogin = useAuthStore((state) => state.login);
   const logout = useAuthStore((state) => state.logout);

   // Derived states
   const isAuthenticated = !!currentUser;

   const isDoctor = currentUser?.role === 'doctor';
   const isPatient = currentUser?.role === 'patient';

   const register = (credentials: RegisterCredentialsType) =>
      storeRegister({ ...credentials, navigate });
   const login = (credentials: LoginCredentialsType) =>
      storeLogin({ ...credentials, navigate });

   return {
      currentUser,
      isLoading,
      isAuthenticated,
      isDoctor,
      isPatient,

      register,
      login,
      logout,
   };
};
