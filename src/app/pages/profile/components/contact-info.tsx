import { Mail, Phone } from 'lucide-react';

import { AuthUser } from '@/shared/types';

export default function ContactInformation({ profile }: { profile: AuthUser }) {
   return (
      <>
         <div className='flex items-center'>
            <Mail className='mr-2 h-4 w-4 text-muted-foreground' />
            <span>{profile.email}</span>
         </div>

         <div className='flex items-center'>
            <Phone className='mr-2 h-4 w-4 text-muted-foreground' />
            <span>{profile.phone || 'No phone number'}</span>
         </div>
      </>
   );
}
