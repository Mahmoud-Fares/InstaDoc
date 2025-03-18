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
import { TabsContent } from '@/shared/components/ui/tabs';

import { Doctor } from '@/features/doctor/types/doctor';

type DoctorClinicSettingsProps = {
   currentUser: Doctor;
};

export default function DoctorClinicSettings({
   currentUser,
}: DoctorClinicSettingsProps) {
   const navigate = useNavigate();

   return (
      <TabsContent value='clinic'>
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
                        value={currentUser?.workInfo.name}
                        placeholder='Heart Health Associates'
                     />
                  </div>

                  <div className='space-y-2 sm:col-span-2'>
                     <Label htmlFor='ClinicAddress'>Clinic Address</Label>
                     <Input
                        id='ClinicAddress'
                        value={currentUser?.workInfo.address}
                        placeholder='123 Medical Pkwy, Boston, MA 02215'
                     />
                  </div>

                  <div className='space-y-2'>
                     <Label htmlFor='ClinicPhone'>Clinic Phone</Label>
                     <Input
                        id='ClinicPhone'
                        value={currentUser?.workInfo.phone}
                        placeholder='(555) 789-0123'
                     />
                  </div>
               </div>
            </CardContent>

            <CardFooter className='flex justify-end space-x-2'>
               <Button variant='outline' onClick={() => navigate('/profile')}>
                  Cancel
               </Button>

               <Button>Save Changes</Button>
            </CardFooter>
         </Card>
      </TabsContent>
   );
}
