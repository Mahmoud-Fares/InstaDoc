import { Star } from 'lucide-react';

import { Doctor } from '@/features/doctor/types/doctor';

type DoctorRatingProps = {
   doctor: Doctor;
};

export default function DoctorRating({ doctor }: DoctorRatingProps) {
   return (
      <div className='flex items-center'>
         <Star className='mr-2 h-4 w-4 text-yellow-500' />
         <span>
            {doctor.averageRating} ({doctor.reviewCount} reviews)
         </span>
      </div>
   );
}
