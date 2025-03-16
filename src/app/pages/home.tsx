import { toast } from 'sonner';

import { useAuth } from '@/features/auth';
import { Button } from '@/shared/components/ui/button';

export default function Home() {
   const { currentUser, isAuthenticated, logout } = useAuth();

   return (
      <div className='flex h-screen flex-col items-center justify-center gap-4'>
         <h1 className='text-3xl font-bold underline'>
            {isAuthenticated
               ? `Hello ${currentUser?.name}!👋`
               : 'Hello there!👋'}
         </h1>

         <Button onClick={logout}>Logout</Button>

         <Button
            onClick={() => {
               toast.success("That's enough Don't do it again!");
            }}
         >
            Click me
         </Button>
      </div>
   );
}
