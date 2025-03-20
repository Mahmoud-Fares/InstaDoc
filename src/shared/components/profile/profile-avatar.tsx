import {
   Avatar,
   AvatarFallback,
   AvatarImage,
} from '@/shared/components/ui/avatar';
import { cn } from '@/shared/lib/utils';

import { AuthUser } from '@/features/auth';

type ProfileAvatarProps = {
   profile: AuthUser;
   className?: string;
};

export default function ProfileAvatar({
   profile,
   className,
}: ProfileAvatarProps) {
   return (
      <Avatar className={cn('h-16 w-16', className)}>
         <AvatarImage src={profile.avatar} alt={profile.name} />
         <AvatarFallback>
            {profile.name
               .split(' ')
               .map((n: string) => n[0])
               .join('')}
         </AvatarFallback>
      </Avatar>
   );
}
