import { toast } from 'sonner';

import { Button } from '@/shared/components/ui/button';

export default function Home() {
   return (
      <div className='flex h-screen flex-col items-center justify-center gap-4'>
         <h1 className='text-3xl font-bold underline'>Hello world!</h1>
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
