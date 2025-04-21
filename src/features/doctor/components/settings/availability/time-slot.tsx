import { z } from 'zod';

import { cn } from '@/shared/lib/utils';
import { TimeSlot } from '@/shared/types/doctor';

import { SlotButtons } from '@/features/doctor/components/buttons/time-slot-buttons';
import TimeSlotDetails from '@/features/doctor/components/settings/availability/time-slot-details';
import { timeSlotFormSchema } from '@/features/doctor/schema/schedule-schema';

type TimeSlotComponentProps = {
   slot: TimeSlot;
   deleteTimeSlot: () => void;
   updateTimeSlot: (slot: z.infer<typeof timeSlotFormSchema>) => void;
};

export default function TimeSlotComponent({
   slot,
   deleteTimeSlot,
   updateTimeSlot,
}: TimeSlotComponentProps) {
   return (
      <div
         className={cn(
            'flex items-end gap-3 rounded border p-3',
            'md:rounded-none md:border-0 md:p-0 md:py-2'
         )}
      >
         <TimeSlotDetails
            slot={slot}
            className={cn('flex-1', !slot.isActive && 'opacity-20')}
         />

         <SlotButtons
            slot={slot}
            deleteTimeSlot={deleteTimeSlot}
            updateTimeSlot={updateTimeSlot}
            className='md:mb-1'
         />
      </div>
   );
}
