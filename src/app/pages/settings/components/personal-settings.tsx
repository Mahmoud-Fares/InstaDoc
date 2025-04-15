import PersonalSettingsForm from '@/shared/components/forms/personal-settings';
import ProfileAvatar from '@/shared/components/profile-avatar';
import { Button } from '@/shared/components/ui/button';
import {
   Card,
   CardContent,
   CardDescription,
   CardHeader,
   CardTitle,
} from '@/shared/components/ui/card';
import { Separator } from '@/shared/components/ui/separator';
import { AuthUser } from '@/shared/types';

import { useAuth } from '@/features/auth';

export default function PersonalSettings() {
   const { currentUser } = useAuth();

   return (
      <Card>
         <CardHeader>
            <CardTitle>Personal Information</CardTitle>
            <CardDescription>Update your personal details</CardDescription>
         </CardHeader>

         <CardContent className='space-y-6'>
            <div className='flex flex-col items-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0'>
               <ProfileAvatar
                  profile={currentUser as AuthUser}
                  className='h-24 w-24'
               />

               <div>
                  <h3 className='text-lg font-medium'>Profile Picture</h3>
                  <p className='text-sm text-muted-foreground'>
                     This will be displayed on your profile and in appointments
                  </p>
                  <div className='mt-2'>
                     <Button variant='outline' size='sm'>
                        Change Photo
                     </Button>
                  </div>
               </div>
            </div>

            <Separator />

            <PersonalSettingsForm currentUser={currentUser as AuthUser} />
         </CardContent>
      </Card>
   );
}
