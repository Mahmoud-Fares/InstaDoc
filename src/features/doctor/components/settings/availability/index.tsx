import { Clock } from 'lucide-react';
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

import { useAuth } from '@/features/auth';
import ScheduleForWeek from '@/features/doctor/components/settings/availability/schedule-for-week';
import { useScheduleSettings } from '@/features/doctor/hooks/use-schedule-settings';

export default function AvailabilitySettings() {
   const navigate = useNavigate();

   const { currentUser } = useAuth();
   const {
      schedule,
      handleAddTimeSlot,
      handleDeleteTimeSlot,
      handleUpdateTimeSlot,
   } = useScheduleSettings();

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
            <ScheduleForWeek
               schedule={schedule}
               handleAddTimeSlot={handleAddTimeSlot}
               handleDeleteTimeSlot={handleDeleteTimeSlot}
               handleUpdateTimeSlot={handleUpdateTimeSlot}
            />
         </CardContent>

         <CardFooter className='flex justify-end space-x-2'>
            <Button
               variant='outline'
               onClick={() =>
                  navigate(`/profile/${currentUser!.slug}`, {
                     viewTransition: true,
                  })
               }
            >
               Cancel
            </Button>
            <Button
               onClick={() => {
                  console.log('save availability', schedule);
               }}
            >
               Save Availability
            </Button>
         </CardFooter>
      </Card>
   );
}
