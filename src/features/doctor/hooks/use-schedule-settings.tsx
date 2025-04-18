import { useState } from 'react';

import { DayOfWeek, Schedule, TimeSlot } from '@/shared/types/doctor';

import { isDoctor, useAuth } from '@/features/auth';

export const useScheduleSettings = () => {
   const { currentUser } = useAuth();
   const [schedule, setSchedule] = useState<Schedule>(
      isDoctor(currentUser!) ? currentUser.schedule : ({} as Schedule)
   );

   const handleAddTimeSlot = (day: DayOfWeek) => {
      setSchedule((prevSchedule) => ({
         ...prevSchedule,
         [day]: [...prevSchedule[day], { start: '09:00', end: '17:00' }],
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
      newSlot: TimeSlot
   ) => {
      setSchedule((prevSchedule) => ({
         ...prevSchedule,
         [day]: prevSchedule[day].map((s) => (s === slot ? newSlot : s)),
      }));
   };

   const formatTime = (date: Date) => {
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const roundedMinutes = Math.round(minutes / 5) * 5;
      return `${hours}:${roundedMinutes}`;
   };

   return {
      schedule,
      handleAddTimeSlot,
      handleDeleteTimeSlot,
      handleUpdateTimeSlot,
      formatTime,
   };
};
