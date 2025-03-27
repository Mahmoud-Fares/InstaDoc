import { DayOfWeek, Doctor, TimeSlot } from '@/shared/types/doctor';

// Helper function to get available time slots for a specific date
function getAvailableTimeSlots(doctor: Doctor, date: string): TimeSlot[] {
   const dayOfWeek = getDayOfWeek(new Date(date), doctor);
   return doctor.schedule[dayOfWeek] || [];
}

// Helper function to get day of week as lowercase string
function getDayOfWeek(date: Date, doctor: Doctor): DayOfWeek {
   const days: DayOfWeek[] = Object.keys(doctor.schedule) as DayOfWeek[];

   return days[date.getDay()];
}

// Helper function to generate available appointment slots (30 min each)
export function generateAvailableSlots(doctor: Doctor, date: string): string[] {
   const timeSlots = getAvailableTimeSlots(doctor, date);
   const availableSlots: string[] = [];

   timeSlots.forEach((slot) => {
      let currentTime = new Date(`${date}T${slot.start}`);
      const endTime = new Date(`${date}T${slot.end}`);

      while (currentTime < endTime) {
         const slotStart = currentTime.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true,
         });

         currentTime = new Date(currentTime.getTime() + 30 * 60000); // Add 30 minutes

         if (currentTime <= endTime) {
            availableSlots.push(slotStart);
         }
      }
   });

   return availableSlots;
}
