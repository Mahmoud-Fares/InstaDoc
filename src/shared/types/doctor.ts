import { User } from '@/shared/types';

export type DayOfWeek =
   | 'monday'
   | 'tuesday'
   | 'wednesday'
   | 'thursday'
   | 'friday'
   | 'saturday'
   | 'sunday';

export type TimeSlot = {
   start: string; // 24-hour format HH:MM
   end: string; // 24-hour format HH:MM
};

export type Schedule = Record<DayOfWeek, TimeSlot[]>;

export type ClinicInfo = {
   name: string;
   address: string;
   phone: string;
};

export type Doctor = User & {
   specialties: string[];
   qualifications: string[]; // missing
   education: string[]; // missing
   experience: string[]; // Instead of only experience years, we should have a list of experience to handle multiple specializations.
   clinicInfo: ClinicInfo; // missing
   fees: number;
   averageRating: number; // should we add a rating system?
   reviewCount: number; // should we add a review system?
   schedule: Schedule; // Rename the appointments into schedule.
};
