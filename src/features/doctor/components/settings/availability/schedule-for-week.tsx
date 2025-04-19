import React from 'react';

import { Separator } from '@/shared/components/ui/separator';
import { DayOfWeek } from '@/shared/types/doctor';

import ScheduleForDay from '@/features/doctor/components/settings/availability/schedule-for-day';
import { useSchedule } from '@/features/doctor/hooks/use-schedule';

export default function ScheduleForWeek() {
   const { schedule } = useSchedule();

   const weekDays = Object.keys(schedule) as DayOfWeek[];

   return (
      <div className='space-y-6'>
         {weekDays.map((day) => (
            <React.Fragment key={day}>
               <ScheduleForDay day={day} />

               {day !== 'sunday' && <Separator className='mt-4' />}
            </React.Fragment>
         ))}
      </div>
   );
}
