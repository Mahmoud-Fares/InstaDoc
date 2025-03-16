import { User } from '@/shared/types/user';

export type Doctor = User & {
   specialties: string[];
   qualifications: string[]; // missing
   education: string[]; // missing
   experience: string[]; // missing
   workInfo: {
      // missing
      name: string;
      address: string;
      phone: string;
   };
   fees: number;
   averageRating: number; // should we add a rating system?
   reviewCount: number; // should we add a review system?
};
