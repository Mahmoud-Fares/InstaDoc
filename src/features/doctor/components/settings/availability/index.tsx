import { Clock } from 'lucide-react';

import {
   Card,
   CardContent,
   CardDescription,
   CardHeader,
   CardTitle,
} from '@/shared/components/ui/card';

import ScheduleForWeek from '@/features/doctor/components/settings/availability/schedule-for-week';

export default function AvailabilitySettings() {
   return (
      <Card>
         <CardHeader>
            <CardTitle className='flex items-center'>
               <Clock className='mr-2 h-5 w-5' />
               Availability Schedule
            </CardTitle>
            <CardDescription>
               Set your working hours for each day of the week
            </CardDescription>
         </CardHeader>

         <CardContent>
            <ScheduleForWeek />
         </CardContent>
      </Card>
   );
}
