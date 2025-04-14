import { useNavigate } from 'react-router-dom';

import Container from '@/shared/components/container';
import { Button } from '@/shared/components/ui/button';
import { ThemeToggler } from '@/shared/components/ui/theme-toggler';

import { SignedIn, SignedOut } from '@/features/auth';

import { UserDropdownMenu } from './dropdown-menu';
import Logo from './logo';
import { Navbar } from './navbar';

export default function Header() {
   const navigate = useNavigate();

   return (
      <header
         style={{ viewTransitionName: 'header' }}
         className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'
      >
         <Container className='flex h-14 items-center justify-between'>
            <div className='flex items-center gap-4'>
               <Logo />

               <Navbar className='hidden flex-wrap md:flex' />
            </div>

            <div className='flex items-center gap-2'>
               <ThemeToggler />

               <SignedIn>
                  <UserDropdownMenu />
               </SignedIn>

               <SignedOut>
                  <Button
                     onClick={() =>
                        navigate('/login', { viewTransition: true })
                     }
                  >
                     Login
                  </Button>
               </SignedOut>
            </div>
         </Container>
      </header>
   );
}
