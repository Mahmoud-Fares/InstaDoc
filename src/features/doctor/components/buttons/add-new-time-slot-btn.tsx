import { Plus } from 'lucide-react';

import { Button } from '@/shared/components/ui/button';
import { DayOfWeek } from '@/shared/types/doctor';

import TimeSlotSheetDrawer from '@/features/doctor/components/settings/availability/time-slot-sheet-drawer';
import { useSchedule } from '@/features/doctor/hooks/use-schedule';

type AddNewTimeSlotBtnProps = { day: DayOfWeek };

export default function AddNewTimeSlotBtn({ day }: AddNewTimeSlotBtnProps) {
   const { handleAddTimeSlot } = useSchedule();

   return (
      <TimeSlotSheetDrawer
         event='add'
         onSubmit={(newTimeSlot) => handleAddTimeSlot(day, newTimeSlot)}
      >
         <Button variant='outline' size='sm' className='flex items-center'>
            <Plus className='mr-1 h-4 w-4' />
            Add Time Slot
         </Button>
      </TimeSlotSheetDrawer>
   );
}
