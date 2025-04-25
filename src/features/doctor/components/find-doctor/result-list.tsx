import { cn } from '@/shared/lib/utils';

import { DoctorCard } from '@/features/doctor/components/card';
import { EmptyResult } from '@/features/doctor/components/find-doctor/empty-result';
import { useFindDoctor } from '@/features/doctor/hooks/use-find-doctor';

type ResultListProps = {
   className?: string;
};

export const ResultList = ({ className }: ResultListProps) => {
   const { filteredDoctors } = useFindDoctor();

   if (filteredDoctors.length === 0) return <EmptyResult />;

   return (
      <ul className={cn('flex flex-col gap-6', className)}>
         {filteredDoctors.map((doctor) => (
            <li key={doctor.id}>
               <DoctorCard doctor={doctor} />
            </li>
         ))}
      </ul>
   );
};
