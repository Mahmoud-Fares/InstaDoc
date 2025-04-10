import { useNavigate } from 'react-router-dom';

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

import { isDoctor, useAuth } from '@/features/auth';

export default function DoctorClinicSettings() {
   const navigate = useNavigate();
   const { currentUser } = useAuth();

   return (
      isDoctor(currentUser!) && (
         <Card>
            <CardHeader>
               <CardTitle>Clinic Information</CardTitle>
               <CardDescription>Update your Clinic details</CardDescription>
            </CardHeader>

            <CardContent className='space-y-6'>
               <div className='grid gap-4 sm:grid-cols-2'>
                  <div className='space-y-2 sm:col-span-2'>
                     <Label htmlFor='ClinicName'>Clinic Name</Label>
                     <Input
                        id='ClinicName'
                        value={currentUser?.clinicInfo.name}
                        placeholder='Heart Health Associates'
                     />
                  </div>

                  <div className='space-y-2 sm:col-span-2'>
                     <Label htmlFor='ClinicAddress'>Clinic Address</Label>
                     <Input
                        id='ClinicAddress'
                        value={currentUser?.clinicInfo.address}
                        placeholder='123 Medical Pkwy, Boston, MA 02215'
                     />
                  </div>

                  <div className='space-y-2'>
                     <Label htmlFor='ClinicPhone'>Clinic Phone</Label>
                     <Input
                        id='ClinicPhone'
                        value={currentUser?.clinicInfo.phone}
                        placeholder='(555) 789-0123'
                     />
                  </div>
               </div>
            </CardContent>

            <CardFooter className='flex justify-end space-x-2'>
               <Button
                  variant='outline'
                  onClick={() =>
                     navigate(`/profile/${currentUser.slug}`, {
                        viewTransition: true,
                     })
                  }
               >
                  Cancel
               </Button>

               <Button>Save Changes</Button>
            </CardFooter>
         </Card>
      )
   );
}
