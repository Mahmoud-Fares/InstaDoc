import { Plus } from 'lucide-react';

import { Button } from '@/shared/components/ui/button';
import { DayOfWeek } from '@/shared/types/doctor';

import TimeSlotsForDay from '@/features/doctor/components/settings/availability/time-slots-for-day';
import { useSchedule } from '@/features/doctor/hooks/use-schedule';

type ScheduleForDayProps = {
   day: DayOfWeek;
};

export default function ScheduleForDay({ day }: ScheduleForDayProps) {
   const { schedule, handleAddTimeSlot } = useSchedule();

   return (
      <div className='space-y-3'>
         <div className='flex items-center justify-between'>
            <h3 className='text-lg font-medium capitalize'>{day}</h3>
            <Button
               variant='outline'
               size='sm'
               className='flex items-center'
               onClick={() => handleAddTimeSlot(day)}
            >
               <Plus className='mr-1 h-4 w-4' />
               Add Time Slot
            </Button>
         </div>

         <TimeSlotsForDay day={day} timeSlots={schedule[day]} />
      </div>
   );
}
