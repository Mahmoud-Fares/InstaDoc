import { Outlet, ScrollRestoration } from 'react-router-dom';

import Header from '@/app/layouts/components/header';

type MainLayoutProps = {
   children?: React.ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
   return (
      <>
         <ScrollRestoration />

         <div className='flex min-h-screen flex-col'>
            <Header />

            <main className='flex min-h-[calc(100vh-4rem)] flex-col'>
               {children ?? <Outlet />}
            </main>
         </div>
      </>
   );
}
