import {
   Card,
   CardContent,
   CardDescription,
   CardHeader,
   CardTitle,
} from '@/shared/components/ui/card';

import { isPatient, useAuth } from '@/features/auth';
import EmergencySettingsForm from '@/features/patient/components/form/emergency-settings';

export default function EmergencySettings() {
   const { currentUser } = useAuth();

   return (
      isPatient(currentUser!) && (
         <Card>
            <CardHeader>
               <CardTitle>Emergency Contact</CardTitle>
               <CardDescription>
                  Update your emergency contact information
               </CardDescription>
            </CardHeader>

            <CardContent>
               <EmergencySettingsForm currentUser={currentUser} />
            </CardContent>
         </Card>
      )
   );
}
