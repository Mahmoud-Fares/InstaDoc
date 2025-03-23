import { Doctor } from '../../../shared/types/doctor';

// * chatgpt helped me with this function
export function getFirstAvailable(schedule: Doctor['schedule']) {
   // Days of the week, with indices corresponding to Date.getDay() (0 = Sunday, 6 = Saturday)
   const daysOfWeek = [
      'sunday',
      'monday',
      'tuesday',
      'wednesday',
      'thursday',
      'friday',
      'saturday',
   ];
   const now = new Date();
   const todayIndex = now.getDay();

   // Loop over the next 7 days
   for (let i = 0; i < 7; i++) {
      // Calculate the index for the day we're checking
      let dayIndex = (todayIndex + i) % 7;
      let dayName = daysOfWeek[dayIndex];
      let daySchedule = schedule[dayName as keyof Doctor['schedule']];

      // Check if the doctor has any slots on that day
      if (daySchedule && daySchedule.length > 0) {
         // Assume the schedule is sorted by start time.
         // We'll combine the first slot's start and the last slot's end into one range.
         let firstSlot = daySchedule[0];
         let lastSlot = daySchedule[daySchedule.length - 1];
         const start = formatTime(firstSlot.start);
         const end = formatTime(lastSlot.end);

         let label;
         if (i === 0) {
            label = 'Available today';
         } else if (i === 1) {
            label = 'Available tomorrow';
         } else {
            label = `Available on ${capitalize(dayName)}`;
         }
         return `${label}: ${start} - ${end}`;
      }
   }
   return 'No available schedule found';
}

function formatTime(timeStr: string) {
   // Convert a "HH:mm" string (e.g., "09:00") into a 12-hour time format ("9:00 AM")
   const [hourStr, minute] = timeStr.split(':');
   let hour = parseInt(hourStr, 10);
   const ampm = hour >= 12 ? 'PM' : 'AM';
   hour = hour % 12;
   if (hour === 0) hour = 12;
   return `${hour}:${minute} ${ampm}`;
}

function capitalize(word: string) {
   return word.charAt(0).toUpperCase() + word.slice(1);
}
