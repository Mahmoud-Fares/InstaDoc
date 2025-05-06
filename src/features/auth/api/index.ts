import { axiosClient } from '@/shared/lib/axios/axios-client';

import {
   LoginCredentialsType,
   RegisterCredentialsType,
} from '@/features/auth/types';

export const projectApi = async () => {
   return await axiosClient.get('api/Doctor/allDoctors');
};

export const AUTH_API = {
   register: async (registerCredentials: RegisterCredentialsType) => {
      return await axiosClient.post('api/auth/register', {
         ...registerCredentials,
         password_confirmation: registerCredentials.confirmPassword,
         role: registerCredentials.role === 'patient' ? 'client' : 'doctor',
      });
   },

   login: async ({ email, password }: LoginCredentialsType) => {
      return await axiosClient.post('api/auth/login', {
         email,
         password,
      });
   },

   me: async () => {
      return await axiosClient.get('api/profile/show');
   },

   logout: async () => {
      return await axiosClient.post('api/auth/logout');
   },
};
