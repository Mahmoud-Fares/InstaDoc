import { FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import EmptyState from '@/shared/components/empty-state';
import { Button } from '@/shared/components/ui/button';
import {
   Card,
   CardContent,
   CardDescription,
   CardFooter,
   CardHeader,
   CardTitle,
} from '@/shared/components/ui/card';
import ViewToCurrentUser from '@/shared/components/view-to-current-user';

import { getPatientMedicalHistory } from '@/features/appointment';
import { Patient } from '@/features/patient/types/patient';

import MedicalHistoryDetails from './medical-history/details';

type MedicalHistoryProps = {
   patient: Patient;
};

export default function MedicalHistory({ patient }: MedicalHistoryProps) {
   const navigate = useNavigate();

   const medicalHistory = getPatientMedicalHistory(patient.id);

   return (
      <Card className='md:col-span-2'>
         <CardHeader>
            <CardTitle className='flex items-center'>
               <FileText className='mr-2 h-5 w-5' />
               Medical History
            </CardTitle>
            <CardDescription>
               Recent medical appointments and records
            </CardDescription>
         </CardHeader>

         <CardContent>
            {medicalHistory.length > 0 ? (
               <MedicalHistoryDetails medicalHistory={medicalHistory} />
            ) : (
               <EmptyState message='No past appointments recorded' />
            )}
         </CardContent>

         <CardFooter>
            <ViewToCurrentUser profile={patient}>
               <Button
                  variant='outline'
                  className='w-full'
                  onClick={() => navigate('/appointments')}
               >
                  View All Medical Records
               </Button>
            </ViewToCurrentUser>
         </CardFooter>
      </Card>
   );
}
