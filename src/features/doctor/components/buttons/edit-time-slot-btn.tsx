import { Edit } from 'lucide-react';
import { z } from 'zod';

import { Button } from '@/shared/components/ui/button';
import { TimeSlot } from '@/shared/types/doctor';

import TimeSlotSheetDrawer from '@/features/doctor/components/settings/availability/time-slot-sheet-drawer';
import { timeSlotFormSchema } from '@/features/doctor/schema/schedule-schema';
import { convertStringToDate } from '@/features/doctor/utils/schedule';

type EditTimeSlotBtnProps = {
   slot: TimeSlot;
   updateTimeSlot: (slot: z.infer<typeof timeSlotFormSchema>) => void;
};

export default function EditTimeSlotBtn({
   slot,
   updateTimeSlot,
}: EditTimeSlotBtnProps) {
   return (
      <TimeSlotSheetDrawer
         event='edit'
         initialValues={{
            ...slot,
            start: convertStringToDate(slot.start),
            end: convertStringToDate(slot.end),
         }}
         onSubmit={updateTimeSlot}
      >
         <Button variant='ghost' size='icon' className='text-muted-foreground'>
            <Edit />
         </Button>
      </TimeSlotSheetDrawer>
   );
}
