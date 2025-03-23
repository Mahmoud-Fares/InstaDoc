import { MapPin } from 'lucide-react';

import EmptyState from '@/shared/components/empty-state';
import { Doctor } from '@/shared/types';

export const CardClinicInfo = ({ doctor }: { doctor: Doctor }) => {
   return (
      <div className='flex items-center gap-2'>
         <MapPin className='h-4 w-4 text-muted-foreground' />
         {doctor.clinicInfo.address ? (
            <span className='text-sm'>{doctor.clinicInfo.address}</span>
         ) : (
            <EmptyState message='No Clinic information recorded' />
         )}
      </div>
   );
};
