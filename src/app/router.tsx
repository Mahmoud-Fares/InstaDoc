import { lazy } from 'react';

import { createBrowserRouter } from 'react-router-dom';

import ErrorBoundary from '@/shared/components/error-boundary';

const MainLayout = lazy(() => import('@/app/layouts/main-layout'));
const ProtectedLayout = lazy(() => import('@/app/layouts/protected-layout'));
const AuthLayout = lazy(() => import('@/app/layouts/auth-layout'));

const LoginPage = lazy(() => import('@/app/pages/auth/login'));
const SignUpPage = lazy(() => import('@/app/pages/auth/signup'));

const Home = lazy(() => import('@/app/pages/home'));
const Profile = lazy(() => import('@/app/pages/profile'));
const Appointments = lazy(() => import('@/app/pages/appointment'));
const Settings = lazy(() => import('@/app/pages/settings'));
const UpdateAvailability = lazy(
   () => import('@/app/pages/settings/updata-availability')
);
const FindDoctor = lazy(() => import('@/app/pages/find-doctor'));
const BookAppointment = lazy(() => import('@/app/pages/book-appointment'));

const NotFound = lazy(() => import('@/app/pages/not-found'));

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
         {
            path: '*',
            element: <NotFound />,
         },
      ],
   },
   // Protected routes group
   {
      path: '/',
      element: <ProtectedLayout />,
      errorElement: <ErrorBoundary />,
      children: [
         {
            path: 'profile/:slug?',
            element: <Profile />,
         },
         {
            path: 'appointments',
            element: <Appointments />,
         },
         {
            path: 'settings',
            element: <Settings />,
         },
         {
            path: 'update-availability',
            element: <UpdateAvailability />,
         },
         {
            path: 'find-doctor',
            element: <FindDoctor />,
         },
         {
            path: 'book-appointment',
            element: <BookAppointment />,
         },
      ],
   },
   // Auth routes group
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
