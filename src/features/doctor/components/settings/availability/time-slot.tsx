import { useState } from 'react';

import { Trash2 } from 'lucide-react';

import { Button } from '@/shared/components/ui/button';
import { TimeSlot } from '@/shared/types/doctor';

import ScheduleTimeInput from '@/features/doctor/components/settings/availability/schedule-time-input';

type TimeSlotComponentProps = {
   slot: TimeSlot;
   deleteTimeSlot: () => void;
   updateTimeSlot: (newSlot: TimeSlot) => void;
};

const convertToDate = (time: string) => {
   const [hours, minutes] = time.split(':').map(Number);
   return new Date(new Date().setHours(hours, minutes, 0, 0));
};

const formatTime = (date: Date) => {
   const hours = date.getHours();
   const minutes = date.getMinutes();
   const roundedMinutes = Math.round(minutes / 5) * 5;
   return `${hours}:${roundedMinutes}`;
};

export default function TimeSlotComponent({
   slot,
   deleteTimeSlot,
   updateTimeSlot,
}: TimeSlotComponentProps) {
   const [start, setStart] = useState<Date>(convertToDate(slot.start));
   const [end, setEnd] = useState<Date>(convertToDate(slot.end));

   return (
      <div className='flex items-end gap-3'>
         <div className='grid flex-1 grid-cols-2 gap-3'>
            <ScheduleTimeInput
               label='Start Time'
               date={start}
               onChange={(date) => {
                  setStart(date);
                  updateTimeSlot({
                     start: formatTime(date),
                     end: formatTime(end),
                  });
               }}
            />

            <ScheduleTimeInput
               label='End Time'
               date={end}
               onChange={(date) => {
                  setEnd(date);
                  updateTimeSlot({
                     start: formatTime(start),
                     end: formatTime(date),
                  });
               }}
            />
         </div>

         <Button
            onClick={deleteTimeSlot}
            variant='ghost'
            size='icon'
            className='mb-1 text-destructive hover:bg-destructive/20 hover:text-destructive'
         >
            <Trash2 className='h-4 w-4' />
         </Button>
      </div>
   );
}
