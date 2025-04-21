import { Plus } from 'lucide-react';
import { z } from 'zod';

import { Button } from '@/shared/components/ui/button';
import { DayOfWeek } from '@/shared/types/doctor';

import TimeSlotSheetDrawer from '@/features/doctor/components/settings/availability/time-slot-sheet-drawer';
import TimeSlotsForDay from '@/features/doctor/components/settings/availability/time-slots-for-day';
import { useSchedule } from '@/features/doctor/hooks/use-schedule';
import { timeSlotFormSchema } from '@/features/doctor/schema/schedule-schema';

type ScheduleForDayProps = { day: DayOfWeek };

export default function ScheduleForDay({ day }: ScheduleForDayProps) {
   const { schedule, handleAddTimeSlot } = useSchedule();

   return (
      <div className='space-y-3'>
         <div className='flex items-center justify-between'>
            <h3 className='text-lg font-medium capitalize'>{day}</h3>

            <TimeSlotSheetDrawer
               event='add'
               onSubmit={(newTimeSlot: z.infer<typeof timeSlotFormSchema>) =>
                  handleAddTimeSlot(day, newTimeSlot)
               }
            >
               <Button
                  variant='outline'
                  size='sm'
                  className='flex items-center'
               >
                  <Plus className='mr-1 h-4 w-4' />
                  Add Time Slot
               </Button>
            </TimeSlotSheetDrawer>
         </div>

         <TimeSlotsForDay day={day} timeSlots={schedule[day]} />
      </div>
   );
}
