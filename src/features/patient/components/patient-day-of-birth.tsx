import { Calendar } from 'lucide-react';

import { Patient } from '@/shared/types';

type PatientDayOfBirthProps = {
   patient: Patient;
};

export default function PatientDayOfBirth({ patient }: PatientDayOfBirthProps) {
   return (
      <div className='flex items-center'>
         <Calendar className='mr-2 h-4 w-4 text-muted-foreground' />
         <span>
            Date of Birth: {new Date(patient.dateOfBirth).toLocaleDateString()}
         </span>
      </div>
   );
}
