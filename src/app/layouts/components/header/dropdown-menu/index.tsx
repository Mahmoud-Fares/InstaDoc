import { LogOut, Settings, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuSeparator,
} from '@/shared/components/ui/dropdown-menu';

import { useAuth } from '@/features/auth';

import { UserDropdownMenuTrigger } from './dropdown-menu-trigger';
import DropdownMenuUserDetails from './dropdown-menu-user-details';
import RenderMenuGroups from './render-menu-groups';

export function UserDropdownMenu() {
   const { logout } = useAuth();
   const navigate = useNavigate();

   const USER_MENU_ITEMS = [
      [
         {
            label: 'Profile',
            icon: User,
            action: () => navigate('/profile'),
         },
         {
            label: 'Settings',
            icon: Settings,
            action: () => navigate('/settings'),
         },
      ],
      [
         {
            label: 'Log out',
            icon: LogOut,
            action: logout,
         },
      ],
   ];

   return (
      <DropdownMenu>
         <UserDropdownMenuTrigger />

         <DropdownMenuContent className='mt-1 w-64 max-w-full'>
            <DropdownMenuUserDetails />

            <DropdownMenuSeparator />

            <RenderMenuGroups groups={USER_MENU_ITEMS} />
         </DropdownMenuContent>
      </DropdownMenu>
   );
}
