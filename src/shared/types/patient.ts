import { User } from '@/shared/types';

// no patient data from the backend so far
export type Patient = User & {
   allergies: string[];
   medications: string[];
   conditions: string[];
   insuranceProvider?: string;
   insuranceNumber?: string;
   emergencyContact?: {
      name: string;
      relationship: string;
      phone: string;
   };
};
