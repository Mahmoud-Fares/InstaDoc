import { Edit, Trash2 } from 'lucide-react';
import { z } from 'zod';

import { Button } from '@/shared/components/ui/button';
import { TimePicker } from '@/shared/components/ui/time-picker';
import { cn } from '@/shared/lib/utils';
import { TimeSlot } from '@/shared/types/doctor';

import TimeSlotSheetDrawer from '@/features/doctor/components/settings/availability/time-slot-sheet-drawer';
import { timeSlotFormSchema } from '@/features/doctor/schema/schedule-schema';
import { convertStringToDate } from '@/features/doctor/utils/schedule';

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
         <div
            className={cn(
               'flex flex-1 flex-col gap-3',
               'sm:grid sm:grid-cols-2 sm:items-center',
               'md:grid-cols-4',
               !slot.isActive && 'opacity-20'
            )}
         >
            <div className='space-y-1'>
               <span>Start Time</span>
               <TimePicker
                  value={convertStringToDate(slot.start)}
                  className='pointer-events-none w-full'
               />
            </div>

            <div className='space-y-1'>
               <span>End Time</span>
               <TimePicker
                  value={convertStringToDate(slot.end)}
                  className='pointer-events-none w-full'
               />
            </div>

            <div className='space-y-1'>
               <span>Duration</span>
               <div className='flex items-center rounded-md border-2 border-input p-1 px-2'>
                  {slot.duration}
               </div>
            </div>

            <div className='space-y-1'>
               <span>Capacity</span>
               <div className='flex items-center rounded-md border-2 border-input p-1 px-2'>
                  {slot.capacity}
               </div>
            </div>
         </div>

         <div className='md:mb-1'>
            <TimeSlotSheetDrawer
               event='edit'
               initialValues={{
                  ...slot,
                  start: convertStringToDate(slot.start),
                  end: convertStringToDate(slot.end),
               }}
               onSubmit={updateTimeSlot}
            >
               <Button
                  variant='ghost'
                  size='icon'
                  className='text-muted-foreground'
               >
                  <Edit />
               </Button>
            </TimeSlotSheetDrawer>

            <Button
               onClick={deleteTimeSlot}
               variant='ghost'
               size='icon'
               className='text-destructive hover:bg-destructive/20 hover:text-destructive'
            >
               <Trash2 />
            </Button>
         </div>
      </div>
   );
}
