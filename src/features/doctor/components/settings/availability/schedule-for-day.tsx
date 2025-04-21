import { DayOfWeek } from '@/shared/types/doctor';

import AddNewTimeSlotBtn from '@/features/doctor/components/buttons/add-new-time-slot-btn';
import TimeSlotsForDay from '@/features/doctor/components/settings/availability/time-slots-for-day';
import { useSchedule } from '@/features/doctor/hooks/use-schedule';

type ScheduleForDayProps = { day: DayOfWeek };

export default function ScheduleForDay({ day }: ScheduleForDayProps) {
   const { schedule } = useSchedule();

   return (
      <div className='space-y-3'>
         <div className='flex items-center justify-between'>
            <h3 className='text-lg font-medium capitalize'>{day}</h3>

            <AddNewTimeSlotBtn day={day} />
         </div>

         <TimeSlotsForDay day={day} timeSlots={schedule[day]} />
      </div>
   );
}
