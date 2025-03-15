import { Outlet } from 'react-router-dom';

import { cn } from '@/shared/lib/utils';

export default function AuthLayout() {
   // todo: get the user data and redirect them if they are logged in
   return (
      <div className='py-section flex min-h-screen'>
         <AuthImage className='hidden basis-1/2 lg:flex' />

         <AuthFormWrapper className='flex w-full flex-col items-center justify-center lg:basis-1/2 xl:items-start' />
      </div>
   );
}

function AuthImage({ className }: { className?: string }) {
   return (
      <figure className={cn(className)}>
         <img
            src='/images/auth-image.png'
            alt='auth image alternative text'
            className='block h-full w-full rounded-r'
         />
      </figure>
   );
}

function AuthFormWrapper({ className }: { className?: string }) {
   return (
      <div className={cn('p-8', className)}>
         <div className='w-full max-w-md xl:max-w-screen-lg'>
            <Outlet />
         </div>
      </div>
   );
}
