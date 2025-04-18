import React from 'react';

import { Separator } from '@/shared/components/ui/separator';
import { DayOfWeek, Schedule, TimeSlot } from '@/shared/types/doctor';

import ScheduleForDay from '@/features/doctor/components/settings/availability/schedule-for-day';

type ScheduleForWeekProps = {
   schedule: Schedule;
   handleAddTimeSlot: (day: DayOfWeek) => void;
   handleDeleteTimeSlot: (day: DayOfWeek, timeSlot: TimeSlot) => void;
   handleUpdateTimeSlot: (
      day: DayOfWeek,
      timeSlot: TimeSlot,
      newSlot: TimeSlot
   ) => void;
};

export default function ScheduleForWeek({
   schedule,
   handleAddTimeSlot,
   handleDeleteTimeSlot,
   handleUpdateTimeSlot,
}: ScheduleForWeekProps) {
   const weekDays = Object.keys(schedule) as DayOfWeek[];

   return (
      <div className='space-y-6'>
         {weekDays.map((day) => (
            <React.Fragment key={day}>
               <ScheduleForDay
                  day={day}
                  schedule={schedule}
                  handleAddTimeSlot={handleAddTimeSlot}
                  handleDeleteTimeSlot={handleDeleteTimeSlot}
                  handleUpdateTimeSlot={handleUpdateTimeSlot}
               />

               {day !== 'sunday' && <Separator className='mt-4' />}
            </React.Fragment>
         ))}
      </div>
   );
}
