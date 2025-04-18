import { Plus } from 'lucide-react';

import { Button } from '@/shared/components/ui/button';
import { DayOfWeek, Schedule, TimeSlot } from '@/shared/types/doctor';

import TimeSlotsForDay from '@/features/doctor/components/settings/availability/time-slots-for-day';

type ScheduleForDayProps = {
   day: DayOfWeek;
   schedule: Schedule;
   handleAddTimeSlot: (day: DayOfWeek) => void;
   handleDeleteTimeSlot: (day: DayOfWeek, slot: TimeSlot) => void;
   handleUpdateTimeSlot: (
      day: DayOfWeek,
      slot: TimeSlot,
      newSlot: TimeSlot
   ) => void;
};

export default function ScheduleForDay({
   day,
   schedule,
   handleAddTimeSlot,
   handleDeleteTimeSlot,
   handleUpdateTimeSlot,
}: ScheduleForDayProps) {
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

         <TimeSlotsForDay
            timeSlots={schedule[day]}
            day={day}
            handleDeleteTimeSlot={handleDeleteTimeSlot}
            handleUpdateTimeSlot={handleUpdateTimeSlot}
         />
      </div>
   );
}
