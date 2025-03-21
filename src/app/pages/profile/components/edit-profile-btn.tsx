import { useNavigate } from 'react-router-dom';

import { Button } from '@/shared/components/ui/button';
import { cn } from '@/shared/lib/utils';

import { AuthUser, ViewToCurrentUser } from '@/features/auth';

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
