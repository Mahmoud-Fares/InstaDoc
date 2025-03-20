import { Outlet, ScrollRestoration } from 'react-router-dom';

type MainLayoutProps = {
   children?: React.ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
   return (
      <>
         <ScrollRestoration />
         <div className='flex min-h-screen flex-col'>
            <main>{children ?? <Outlet />}</main>
         </div>
      </>
   );
}
