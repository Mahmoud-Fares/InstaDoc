import { useNavigate } from 'react-router-dom';

import ProfileAvatar from '@/shared/components/profile/profile-avatar';
import { Button } from '@/shared/components/ui/button';
import {
   Card,
   CardContent,
   CardDescription,
   CardFooter,
   CardHeader,
   CardTitle,
} from '@/shared/components/ui/card';
import { Input } from '@/shared/components/ui/input';
import { Label } from '@/shared/components/ui/label';
import { Separator } from '@/shared/components/ui/separator';

import { AuthUser, isPatient, useAuth } from '@/features/auth';
import { Patient } from '@/features/patient';

import { DatePicker } from '../ui/date-picker';

export default function PersonalSettings() {
   const navigate = useNavigate();

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

            <div className='grid gap-4 sm:grid-cols-2'>
               <div className='space-y-2'>
                  <Label htmlFor='name'>Full Name</Label>
                  <Input
                     id='name'
                     value={currentUser?.name}
                     placeholder='Dr. Jane Smith'
                  />
               </div>

               <div className='space-y-2'>
                  <Label htmlFor='email'>Email</Label>
                  <Input
                     id='email'
                     type='email'
                     value={currentUser?.email}
                     placeholder='dr.smith@example.com'
                  />
               </div>

               <div className='space-y-2'>
                  <Label htmlFor='phone'>Phone Number</Label>
                  <Input
                     id='phone'
                     value={currentUser?.phone}
                     placeholder='(555) 123-4567'
                  />
               </div>

               <div className='space-y-2'>
                  <Label htmlFor='address'>Address</Label>
                  <Input
                     id='address'
                     value={currentUser?.governorate}
                     placeholder='123 Medical Pkwy, Boston, MA 02215'
                  />
               </div>

               {isPatient(currentUser as Patient) && (
                  <div className='space-y-2'>
                     <Label htmlFor='birthdate'>Date of birth</Label>
                     <DatePicker
                        initialDate={
                           new Date(currentUser?.dateOfBirth as string)
                        }
                     />
                  </div>
               )}
            </div>
         </CardContent>

         <CardFooter className='flex justify-end space-x-2'>
            <Button variant='outline' onClick={() => navigate('/profile')}>
               Cancel
            </Button>

            <Button>Save Changes</Button>
         </CardFooter>
      </Card>
   );
}
