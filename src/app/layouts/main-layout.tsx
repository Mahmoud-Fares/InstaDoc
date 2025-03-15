import { Outlet, ScrollRestoration } from 'react-router-dom';

export default function MainLayout() {
   return (
      <>
         <ScrollRestoration />
         <div className='flex min-h-screen flex-col'>
            <main>
               <Outlet />
            </main>
         </div>
      </>
   );
}
