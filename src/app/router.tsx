import { lazy } from 'react';

import { createBrowserRouter } from 'react-router-dom';

import ErrorBoundary from '@/shared/components/error-boundary';

const MainLayout = lazy(() => import('@/app/layouts/main-layout'));
const ProtectedLayout = lazy(() => import('@/app/layouts/protected-layout'));
const AuthLayout = lazy(() => import('@/app/layouts/auth-layout'));

const LoginPage = lazy(() => import('@/app/pages/auth/login'));
const SignUpPage = lazy(() => import('@/app/pages/auth/signup'));

const Home = lazy(() => import('@/app/pages/home'));
const Profile = lazy(() => import('@/app/pages/profile/profile-page'));
const Settings = lazy(() => import('@/app/pages/settings/settings-page'));
const UpdateAvailability = lazy(
   () => import('@/app/pages/settings/updata-availability')
);

export const router = createBrowserRouter([
   {
      path: '/',
      element: <MainLayout />,
      errorElement: <ErrorBoundary />,
      children: [
         {
            index: true,
            element: <Home />,
         },
      ],
   },
   // Protected rotes group
   {
      path: '/',
      element: <ProtectedLayout />,
      errorElement: <ErrorBoundary />,
      children: [
         {
            path: 'profile',
            element: <Profile />,
         },
         {
            path: 'settings',
            element: <Settings />,
         },
         {
            path: 'update-availability',
            element: <UpdateAvailability />,
         },
      ],
   },
   // Auth rotes group
   {
      path: '/',
      element: <AuthLayout />,
      errorElement: <ErrorBoundary />,
      children: [
         {
            path: 'signup',
            element: <SignUpPage />,
         },
         {
            path: 'login',
            element: <LoginPage />,
         },
      ],
   },
]);
