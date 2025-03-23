import { Schedule } from '@/shared/types/doctor';

import DaySchedule from '@/features/doctor/components/profile/schedule/day-schedule';

export default function ScheduleDetails({ schedule }: { schedule: Schedule }) {
   return (
      <div className='space-y-4'>
         {Object.entries(schedule).map(([day, slots]) => (
            <DaySchedule key={day} day={day} slots={slots} />
         ))}
      </div>
   );
}
