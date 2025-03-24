import { NavLink } from 'react-router-dom';

import { cn } from '@/shared/lib/utils';

const LINKS = [
   {
      label: 'Dashboard',
      to: '/dashboard',
   },
   {
      label: 'Find Doctor',
      to: '/find-doctor',
   },
   {
      label: 'Appointments',
      to: '/appointments',
   },
];

export const Navbar = ({ className }: { className?: string }) => (
   <nav className={cn(className)}>
      <ul className='flex items-center gap-4'>
         {LINKS.map((link) => (
            <li key={link.to}>
               <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                     cn(
                        'font-medium transition-colors hover:text-primary',
                        isActive && 'text-primary'
                     )
                  }
               >
                  {link.label}
               </NavLink>
            </li>
         ))}
      </ul>
   </nav>
);
