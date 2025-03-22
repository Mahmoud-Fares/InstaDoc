import { Outlet, ScrollRestoration } from 'react-router-dom';

import { ThemeToggler } from '@/shared/components/ui/theme-toggler';

type MainLayoutProps = {
   children?: React.ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
   return (
      <>
         <ScrollRestoration />
         <ThemeToggler className='fixed right-4 top-4' />
         <div className='flex min-h-screen flex-col'>
            <main>{children ?? <Outlet />}</main>
         </div>
      </>
   );
}
