import { useNavigate } from 'react-router-dom';

import { Button } from '@/shared/components/ui/button';
import { cn } from '@/shared/lib/utils';

type EditProfileButtonProps = {
   className?: string;
};

export default function EditProfileButton({
   className,
}: EditProfileButtonProps) {
   const navigate = useNavigate();

   return (
      <Button
         variant='outline'
         className={cn(className)}
         onClick={() => navigate('/settings', { viewTransition: true })}
      >
         Edit Profile
      </Button>
   );
}
