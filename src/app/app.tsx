import { RouterProvider } from 'react-router-dom';

import { router } from '@/app/router';
import { Toaster } from '@/shared/components/ui/sonner';

export default function App() {
   return (
      <>
         <RouterProvider router={router} />
         <Toaster position='top-left' richColors />
      </>
   );
}
