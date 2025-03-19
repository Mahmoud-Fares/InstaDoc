import EmptyState from '@/shared/components/empty-state';
import { Badge } from '@/shared/components/ui/badge';

import { Doctor } from '@/features/doctor/types/doctor';

type DoctorQualificationsProps = {
   doctor: Doctor;
};

export default function DoctorQualifications({
   doctor,
}: DoctorQualificationsProps) {
   return doctor.qualifications && doctor.qualifications.length > 0 ? (
      <ul className='space-y-2'>
         {doctor.qualifications.map((qualification: string, index: number) => (
            <QualificationItem key={index} qualification={qualification} />
         ))}
      </ul>
   ) : (
      <EmptyState message='No qualifications recorded' />
   );
}

function QualificationItem({ qualification }: { qualification: string }) {
   return (
      <li className='flex items-center'>
         <Badge variant='outline' className='mr-2'>
            Qualification
         </Badge>
         {qualification}
      </li>
   );
}
