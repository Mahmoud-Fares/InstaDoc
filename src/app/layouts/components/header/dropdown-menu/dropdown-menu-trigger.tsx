import ProfileAvatar from '@/shared/components/profile-avatar';
import { Button } from '@/shared/components/ui/button';
import { DropdownMenuTrigger } from '@/shared/components/ui/dropdown-menu';
import { AuthUser } from '@/shared/types';

import { useAuth } from '@/features/auth';

export function UserDropdownMenuTrigger() {
   const { currentUser } = useAuth();

   return (
      <DropdownMenuTrigger asChild>
         <Button
            variant='ghost'
            className='flex h-auto gap-0 p-0 hover:bg-transparent focus-visible:ring-0'
         >
            <ProfileAvatar
               profile={currentUser as AuthUser}
               className='size-10'
            />
         </Button>
      </DropdownMenuTrigger>
   );
}
