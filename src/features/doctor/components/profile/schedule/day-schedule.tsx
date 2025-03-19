import { TimeSlot } from '@/features/doctor/types/doctor';

type DayScheduleProps = {
   day: string;
   slots: TimeSlot[];
};

export default function DaySchedule({ day, slots }: DayScheduleProps) {
   return (
      <div className='flex items-start'>
         <div className='w-24 font-medium capitalize'>{day}</div>

         <div>
            {slots.length > 0 ? (
               slots.map((slot, index) => (
                  <ScheduleTimeSlot key={index} slot={slot} />
               ))
            ) : (
               <div className='text-sm text-muted-foreground'>
                  Not available
               </div>
            )}
         </div>
      </div>
   );
}

function ScheduleTimeSlot({ slot }: { slot: TimeSlot }) {
   return (
      <div className='text-sm'>
         {slot.start} - {slot.end}
      </div>
   );
}
