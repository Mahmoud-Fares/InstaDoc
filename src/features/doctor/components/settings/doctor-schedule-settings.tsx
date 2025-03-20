import { useNavigate } from 'react-router-dom';

import { Button } from '@/shared/components/ui/button';
import {
   Card,
   CardContent,
   CardDescription,
   CardHeader,
   CardTitle,
} from '@/shared/components/ui/card';

export default function DoctorScheduleSettings() {
   const navigate = useNavigate();

   return (
      <Card>
         <CardHeader>
            <CardTitle>Availability Settings</CardTitle>
            <CardDescription>
               Manage your working hours and availability
            </CardDescription>
         </CardHeader>
         <CardContent className='space-y-6'>
            <p className='text-muted-foreground'>
               You can update your availability schedule to let patients know
               when you're available for appointments.
            </p>
            <Button onClick={() => navigate('/update-availability')}>
               Update Availability
            </Button>
         </CardContent>
      </Card>
   );
}
