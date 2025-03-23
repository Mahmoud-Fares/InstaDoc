import { Clock } from 'lucide-react';

import { Doctor } from '@/shared/types';

import { getFirstAvailable } from '../../utils';

export const CardFirstAvailableTime = ({ doctor }: { doctor: Doctor }) => {
   const firstAvailable = getFirstAvailable(doctor.schedule);

   return (
      <div className='flex items-center gap-2'>
         <Clock className='h-4 w-4 text-muted-foreground' />
         <span className='text-sm'>{firstAvailable}</span>
      </div>
   );
};
