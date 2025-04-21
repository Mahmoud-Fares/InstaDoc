import { useState } from 'react';

import { toast } from 'sonner';
import { z } from 'zod';

import { wait } from '@/shared/lib/utils';
import { DayOfWeek, Schedule, TimeSlot } from '@/shared/types/doctor';

import { isDoctor, useAuth } from '@/features/auth';

import { timeSlotFormSchema } from '../schema/schedule-schema';
import { convertDateToString } from '../utils/schedule';

export type ScheduleContextType = {
   schedule: Schedule;

   handleAddTimeSlot: (
      day: DayOfWeek,
      slot: z.infer<typeof timeSlotFormSchema>
   ) => void;
   handleDeleteTimeSlot: (day: DayOfWeek, slot: TimeSlot) => void;
   handleUpdateTimeSlot: (
      day: DayOfWeek,
      slot: TimeSlot,
      newSlot: z.infer<typeof timeSlotFormSchema>
   ) => void;

   saveSchedule: () => Promise<void>;
};

export const useScheduleSettings = (): ScheduleContextType => {
   const { currentUser } = useAuth();
   const [schedule, setSchedule] = useState<Schedule>(
      isDoctor(currentUser!) ? currentUser.schedule : ({} as Schedule)
   );

   const handleAddTimeSlot = (
      day: DayOfWeek,
      slot: z.infer<typeof timeSlotFormSchema>
   ) => {
      setSchedule((prevSchedule) => ({
         ...prevSchedule,
         [day]: [
            ...prevSchedule[day],
            {
               ...slot,
               start: convertDateToString(slot.start),
               end: convertDateToString(slot.end),
            },
         ],
      }));
   };

   const handleDeleteTimeSlot = (day: DayOfWeek, slot: TimeSlot) => {
      setSchedule((prevSchedule) => ({
         ...prevSchedule,
         [day]: prevSchedule[day].filter((s) => s !== slot),
      }));
   };

   const handleUpdateTimeSlot = (
      day: DayOfWeek,
      slot: TimeSlot,
      newSlot: z.infer<typeof timeSlotFormSchema>
   ) => {
      setSchedule((prevSchedule) => ({
         ...prevSchedule,
         [day]: prevSchedule[day].map((s) =>
            s === slot
               ? {
                    ...newSlot,
                    start: convertDateToString(newSlot.start),
                    end: convertDateToString(newSlot.end),
                 }
               : s
         ),
      }));
   };

   const saveSchedule = async () => {
      if (!currentUser) return;

      await wait(1000);

      console.log('Saving schedule to backend:', schedule);
      toast(
         <pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
            <code className='text-white'>
               {JSON.stringify(schedule, null, 2)}
            </code>
         </pre>
      );

      // Update user in auth context if needed
      // updateUser({ ...currentUser, schedule });

      return Promise.resolve();
   };

   return {
      schedule,

      handleAddTimeSlot,
      handleDeleteTimeSlot,
      handleUpdateTimeSlot,

      saveSchedule,
   };
};
