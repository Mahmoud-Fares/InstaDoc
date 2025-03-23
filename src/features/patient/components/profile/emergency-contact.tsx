import { AlertCircle } from 'lucide-react';

import EmptyState from '@/shared/components/empty-state';
import {
   Card,
   CardContent,
   CardFooter,
   CardHeader,
   CardTitle,
} from '@/shared/components/ui/card';
import { Patient } from '@/shared/types';

import { ViewToCurrentUser } from '@/features/auth';

import EmergencyContactDetails from './emergency/contact-details';
import UpdateEmergencyContactButton from './emergency/update-emergency-button';

type EmergencyContactProps = {
   patient: Patient;
};

export default function EmergencyContact({ patient }: EmergencyContactProps) {
   return (
      <Card>
         <CardHeader>
            <CardTitle className='flex items-center'>
               <AlertCircle className='mr-2 h-5 w-5 text-destructive' />
               Emergency Contact
            </CardTitle>
         </CardHeader>

         <CardContent>
            {patient.emergencyContact ? (
               <EmergencyContactDetails patient={patient} />
            ) : (
               <EmptyState message='No emergency contact recorded' />
            )}
         </CardContent>

         <ViewToCurrentUser profile={patient}>
            <CardFooter>
               <UpdateEmergencyContactButton />
            </CardFooter>
         </ViewToCurrentUser>
      </Card>
   );
}
