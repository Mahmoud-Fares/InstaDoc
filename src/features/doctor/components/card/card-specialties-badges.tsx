import { Badge } from '@/shared/components/ui/badge';
import { Doctor } from '@/shared/types';

export const CardSpecialtiesBadges = ({ doctor }: { doctor: Doctor }) => {
   return (
      doctor.specialties &&
      doctor.specialties.length > 0 && (
         <div className='mt-2 flex flex-wrap gap-1'>
            {doctor.specialties.map((specialty) => (
               <Badge key={specialty} variant='outline'>
                  {specialty}
               </Badge>
            ))}
         </div>
      )
   );
};
