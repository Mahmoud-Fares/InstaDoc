import { useNavigate } from 'react-router-dom';

import { Button } from '@/shared/components/ui/button';
import ViewToCurrentUser from '@/shared/components/view-to-current-user';
import { cn } from '@/shared/lib/utils';

import { AuthUser } from '@/features/auth';

type EditProfileButtonProps = {
   profile: AuthUser;
   className?: string;
};

export default function EditProfileButton({
   profile,
   className,
}: EditProfileButtonProps) {
   const navigate = useNavigate();

   return (
      <ViewToCurrentUser profile={profile}>
         <Button
            variant='outline'
            className={cn(className)}
            onClick={() => navigate('/settings')}
         >
            Edit Profile
         </Button>
      </ViewToCurrentUser>
   );
}
