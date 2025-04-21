import { Trash2 } from 'lucide-react';

import { Button } from '@/shared/components/ui/button';
import { TimeSlot } from '@/shared/types/doctor';

import EditTimeSlotBtn from '@/features/doctor/components/buttons/edit-time-slot-btn';

type SlotButtonsProps = {
   slot: TimeSlot;
   deleteTimeSlot: () => void;
   updateTimeSlot: (slot: TimeSlot) => void;
   className?: string;
};

export const SlotButtons = ({
   slot,
   deleteTimeSlot,
   updateTimeSlot,
   className,
}: SlotButtonsProps) => (
   <div className={className}>
      <EditTimeSlotBtn slot={slot} updateTimeSlot={updateTimeSlot} />

      {/* // todo wrap it with a dialog and separate it in a separate component */}
      <Button
         onClick={deleteTimeSlot}
         variant='ghost'
         size='icon'
         className='text-destructive hover:bg-destructive/20 hover:text-destructive'
      >
         <Trash2 />
      </Button>
   </div>
);
