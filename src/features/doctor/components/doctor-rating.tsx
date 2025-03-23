import { Star } from 'lucide-react';

import { cn } from '@/shared/lib/utils';
import { Doctor } from '@/shared/types';

type DoctorRatingProps = {
   doctor: Doctor;
   className?: string;
};

export default function DoctorRating({ doctor, className }: DoctorRatingProps) {
   return (
      <div className={cn('flex flex-wrap items-center gap-2', className)}>
         <span className='flex items-center gap-1 text-sm font-medium'>
            <Star className='h-4 w-4 fill-yellow-500 text-yellow-500' />

            {doctor.averageRating?.toFixed(1) || '0.0'}
         </span>

         <span className='text-xs text-muted-foreground'>
            ({doctor.reviewCount || 0} reviews)
         </span>
      </div>
   );
}
