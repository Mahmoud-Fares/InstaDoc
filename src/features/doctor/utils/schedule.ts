import { TimeSlot } from '@/shared/types/doctor';

import { scheduleSchemaType } from '@/features/doctor/schema/schedule-schema';

const convertDateToString = (date: Date) => {
   const hours = date.getHours();
   const minutes = date.getMinutes();
   const roundedMinutes = Math.round(minutes / 5) * 5;
   return `${hours.toString().padStart(2, '0')}:${roundedMinutes.toString().padStart(2, '0')}`;
};

export const convertStringToDate = (time: string) => {
   const [hours, minutes] = time.split(':').map(Number);
   return new Date(new Date().setHours(hours, minutes, 0, 0));
};

export const convertTimeSlotToScheduleSchema = (slot: TimeSlot) => {
   return {
      ...slot,
      start: convertStringToDate(slot.start),
      end: convertStringToDate(slot.end),
   };
};

export const convertScheduleSchemaToTimeSlot = (slot: scheduleSchemaType) => {
   return {
      ...slot,
      start: convertDateToString(slot.start),
      end: convertDateToString(slot.end),
   };
};
