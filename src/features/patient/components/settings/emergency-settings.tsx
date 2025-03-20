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

import { PATIENTS } from '@/features/patient';

export default function EmergencySettings() {
   const navigate = useNavigate();

   const currentUser = PATIENTS[0];

   return (
      <Card>
         <CardHeader>
            <CardTitle>Emergency Contact</CardTitle>
            <CardDescription>
               Update your emergency contact information
            </CardDescription>
         </CardHeader>

         <CardContent className='space-y-6'>
            <div className='grid gap-4 sm:grid-cols-2'>
               <div className='space-y-2'>
                  <Label htmlFor='emergencyName'>Contact Name</Label>
                  <Input
                     id='emergencyName'
                     value={currentUser.emergencyContact?.name}
                     placeholder='Jane Doe'
                  />
               </div>

               <div className='space-y-2'>
                  <Label htmlFor='emergencyRelationship'>Relationship</Label>
                  <Input
                     id='emergencyRelationship'
                     value={currentUser.emergencyContact?.relationship}
                     placeholder='Spouse, Parent, etc.'
                  />
               </div>

               <div className='space-y-2'>
                  <Label htmlFor='emergencyPhone'>Phone Number</Label>
                  <Input
                     id='emergencyPhone'
                     value={currentUser.emergencyContact?.phone}
                     placeholder='(555) 123-4567'
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
   );
}
