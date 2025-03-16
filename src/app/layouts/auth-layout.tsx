import { useEffect } from 'react';

import { Outlet, useNavigate } from 'react-router-dom';

import Container from '@/shared/components/container';
import { cn } from '@/shared/lib/utils';

import { useAuth } from '@/features/auth';
import authImage from '@/features/auth/assets/auth-image.svg';

export default function AuthLayout() {
   const { currentUser } = useAuth();
   const navigate = useNavigate();

   useEffect(() => {
      if (currentUser) {
         navigate('/');
      }
   }, [currentUser, navigate]);

   return (
      <Container className='py-section flex min-h-screen'>
         <AuthFormWrapper className='flex w-full flex-col items-center justify-center lg:basis-1/2 xl:items-start' />

         <AuthImage className='my-auto hidden basis-1/2 lg:flex' />
      </Container>
   );
}

function AuthImage({ className }: { className?: string }) {
   return (
      <figure className={cn('h-fit overflow-hidden rounded-xl', className)}>
         <img
            src={authImage}
            alt='auth image alternative text'
            className='block w-full'
         />
      </figure>
   );
}

function AuthFormWrapper({ className }: { className?: string }) {
   return (
      <div className={cn('p-8', className)}>
         <div className='w-full max-w-md xl:max-w-screen-md'>
            <Outlet />
         </div>
      </div>
   );
}
