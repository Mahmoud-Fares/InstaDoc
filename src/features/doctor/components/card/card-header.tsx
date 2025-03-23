import { CardDescription, CardTitle } from '@/shared/components/ui/card';
import { cn } from '@/shared/lib/utils';
import { Doctor } from '@/shared/types';

type DoctorCardHeaderProps = {
   className?: string;
   doctor: Doctor;
};

export const DoctorCardHeader = ({
   doctor,
   className,
}: DoctorCardHeaderProps) => {
   return (
      <div className={cn(className)}>
         <CardTitle className={cn('text-xl font-bold')}>
            {doctor.name}
         </CardTitle>

         <CardDescription>
            {doctor.specialties?.join(', ') || 'General Practitioner'}
         </CardDescription>
      </div>
   );
};
