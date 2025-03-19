import {
   Avatar,
   AvatarFallback,
   AvatarImage,
} from '@/shared/components/ui/avatar';

import { AuthUser } from '@/features/auth';

type ProfileAvatarProps = {
   profile: AuthUser;
};

export default function ProfileAvatar({ profile }: ProfileAvatarProps) {
   return (
      <Avatar className='h-16 w-16'>
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
