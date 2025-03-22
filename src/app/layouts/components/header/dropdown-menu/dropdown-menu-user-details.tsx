import { DropdownMenuLabel } from '@/shared/components/ui/dropdown-menu';

import { useAuth } from '@/features/auth';

export default function DropdownMenuUserDetails() {
   const { currentUser } = useAuth();

   return (
      <DropdownMenuLabel className='flex items-start gap-3'>
         <div className='flex min-w-0 flex-col'>
            <span className='truncate text-sm font-medium text-foreground'>
               {currentUser!.name}
            </span>
            <span className='truncate text-xs font-normal text-muted-foreground'>
               {currentUser!.email}
            </span>
         </div>
      </DropdownMenuLabel>
   );
}
