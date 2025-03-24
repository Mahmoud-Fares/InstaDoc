import { cn } from '@/shared/lib/utils';
import { Doctor } from '@/shared/types/doctor';

import { DoctorCard } from '@/features/doctor/components/card';

import { EmptyResult } from './empty-result';

type ResultListProps = {
   doctors: Doctor[];
   className?: string;
};

export const ResultList = ({ doctors, className }: ResultListProps) => {
   return doctors.length > 0 ? (
      <ul className={cn(className)}>
         {doctors.map((doctor) => (
            <li key={doctor.id}>
               <DoctorCard doctor={doctor} />
            </li>
         ))}
      </ul>
   ) : (
      <EmptyResult />
   );
};
