import { lazy } from 'react';

import { createBrowserRouter } from 'react-router-dom';

import ErrorBoundary from '@/shared/components/error-boundary';

const MainLayout = lazy(() => import('@/app/layouts/main-layout'));
const AuthLayout = lazy(() => import('@/app/layouts/auth-layout'));

const LoginPage = lazy(() => import('@/app/pages/auth/login'));
const SignUpPage = lazy(() => import('@/app/pages/auth/signup'));

const Home = lazy(() => import('@/app/pages/home'));

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
