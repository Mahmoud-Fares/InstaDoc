import { toast } from 'sonner';

import { Button } from '@/shared/components/ui/button';

import { useAuth } from '@/features/auth';

export default function Home() {
   const { currentUser, isAuthenticated } = useAuth();

   return (
      <div className='flex flex-1 flex-col items-center justify-center gap-4'>
         <h1 className='text-3xl font-bold underline'>
            {isAuthenticated ? `Hey ${currentUser?.name}!👋` : 'Hey there!👋'}
         </h1>

         <Button
            onClick={() => {
               toast.success("Okay, That's enough Don't do it again!");
            }}
         >
            Click me
         </Button>
      </div>
   );
}
