import { Edit } from 'lucide-react';

import { Button } from '@/shared/components/ui/button';
import { TimeSlot } from '@/shared/types/doctor';

import TimeSlotSheetDrawer from '@/features/doctor/components/settings/availability/time-slot-sheet-drawer';

type EditTimeSlotBtnProps = {
   slot: TimeSlot;
   updateTimeSlot: (slot: TimeSlot) => void;
};

export default function EditTimeSlotBtn({
   slot,
   updateTimeSlot,
}: EditTimeSlotBtnProps) {
   return (
      <TimeSlotSheetDrawer
         event='edit'
         initialValues={slot}
         onSubmit={updateTimeSlot}
      >
         <Button variant='ghost' size='icon' className='text-muted-foreground'>
            <Edit />
         </Button>
      </TimeSlotSheetDrawer>
   );
}
