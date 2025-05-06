import axios, { AxiosError } from 'axios';

import { AXIOS_CONFIG } from './config';

export const axiosClient = axios.create(AXIOS_CONFIG);

// Attach interceptor to include token in all requests
axiosClient.interceptors.request.use(
   (config) => {
      try {
         const stored = localStorage.getItem('auth-storage');
         const parsed = stored ? JSON.parse(stored) : null;
         const token = parsed?.state?.token;

         if (token) config.headers['Authorization'] = `Bearer ${token}`;
      } catch (error) {
         console.error('Error reading token from localStorage:', error);
      }

      return config;
   },
   (error) => Promise.reject(error)
);

// redirect to login page if user is not authenticated
axiosClient.interceptors.response.use(
   (response) => response.data, // unwrap .data
   async (error: AxiosError) => {
      const requestUrl = error.config?.url;

      // unauthorized request but not login request
      if (error.response?.status === 401 && requestUrl !== 'api/auth/login')
         window.location.replace('/login');

      return Promise.reject(error);
   }
);
