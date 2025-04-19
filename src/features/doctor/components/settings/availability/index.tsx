import { useState } from 'react';

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
import { useSchedule } from '@/features/doctor/hooks/use-schedule';

export default function AvailabilitySettings() {
   const navigate = useNavigate();
   const [isSaving, setIsSaving] = useState(false);

   const { currentUser } = useAuth();
   const { saveSchedule } = useSchedule();

   const handleSave = async () => {
      setIsSaving(true);
      try {
         await saveSchedule();
      } catch (error) {
         console.error('Error saving schedule:', error);
      } finally {
         setIsSaving(false);
      }
   };

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

         <CardFooter className='flex justify-end space-x-2'>
            <Button
               variant='outline'
               onClick={() =>
                  navigate(`/profile/${currentUser!.slug}`, {
                     viewTransition: true,
                  })
               }
               disabled={isSaving}
            >
               Cancel
            </Button>
            <Button onClick={handleSave} disabled={isSaving}>
               {isSaving ? 'Saving...' : 'Save Availability'}
            </Button>
         </CardFooter>
      </Card>
   );
}
