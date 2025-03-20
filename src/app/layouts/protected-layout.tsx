import { Navigate, Outlet } from 'react-router-dom';

import { useAuth } from '@/features/auth';

import MainLayout from './main-layout';

export default function AuthLayout() {
   const { isAuthenticated } = useAuth();

   if (!isAuthenticated) return <Navigate to='/login' replace />;

   return (
      <MainLayout>
         <Outlet />
      </MainLayout>
   );
}
