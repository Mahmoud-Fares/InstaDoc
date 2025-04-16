import {
   Card,
   CardContent,
   CardDescription,
   CardHeader,
   CardTitle,
} from '@/shared/components/ui/card';

import { isDoctor, useAuth } from '@/features/auth';
import ClinicSettingsForm from '@/features/doctor/components/form/clinic';

export default function DoctorClinicSettings() {
   const { currentUser } = useAuth();

   return (
      isDoctor(currentUser!) && (
         <Card>
            <CardHeader>
               <CardTitle>Clinic Information</CardTitle>
               <CardDescription>Update your Clinic details</CardDescription>
            </CardHeader>

            <CardContent>
               <ClinicSettingsForm currentUser={currentUser} />
            </CardContent>
         </Card>
      )
   );
}
