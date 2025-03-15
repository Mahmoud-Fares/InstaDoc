import { useNavigate, useRouteError } from 'react-router-dom';

import { Button } from '@/shared/components/ui/button';

export default function ErrorBoundary() {
   const error = useRouteError();
   const navigate = useNavigate();

   return (
      <div className='flex min-h-screen items-center justify-center p-4'>
         <div className='space-y-2 text-center'>
            <h1 className='text-2xl font-bold text-red-600'>Oops!</h1>
            <p className='text-gray-600'>Something went wrong.</p>
            <p className='text-sm text-gray-500'>
               {error instanceof Error
                  ? error.message
                  : 'Unknown error occurred'}
            </p>
            <Button onClick={() => navigate('/')}>Go Home</Button>
         </div>
      </div>
   );
}
