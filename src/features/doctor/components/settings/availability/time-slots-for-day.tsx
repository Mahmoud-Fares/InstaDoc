import EmptyState from '@/shared/components/empty-state';
import { DayOfWeek, TimeSlot } from '@/shared/types/doctor';

import TimeSlotComponent from '@/features/doctor/components/settings/availability/time-slot';

type TimeSlotsForDayProps = {
   timeSlots: TimeSlot[];
   day: DayOfWeek;
   handleDeleteTimeSlot: (day: DayOfWeek, slot: TimeSlot) => void;
   handleUpdateTimeSlot: (
      day: DayOfWeek,
      slot: TimeSlot,
      newSlot: TimeSlot
   ) => void;
};

export default function TimeSlotsForDay({
   timeSlots,
   day,
   handleDeleteTimeSlot,
   handleUpdateTimeSlot,
}: TimeSlotsForDayProps) {
   if (timeSlots.length === 0)
      return (
         <EmptyState
            message='No availability set for this day'
            className='h-20 rounded-md border p-3'
         />
      );

   return (
      <div className='space-y-3'>
         {timeSlots.map((slot, index) => (
            <TimeSlotComponent
               key={index}
               slot={slot}
               deleteTimeSlot={() => handleDeleteTimeSlot(day, slot)}
               updateTimeSlot={(newSlot) =>
                  handleUpdateTimeSlot(day, slot, newSlot)
               }
            />
         ))}
      </div>
   );
}
