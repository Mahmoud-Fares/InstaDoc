import { GraduationCap } from 'lucide-react';

import EmptyState from '@/shared/components/empty-state';
import { Doctor } from '@/shared/types';

export default function DoctorEducation({ doctor }: { doctor: Doctor }) {
   return doctor.education && doctor.education.length > 0 ? (
      <ul className='space-y-2'>
         {doctor.education.map((education: string, index: number) => (
            <EducationItem key={index} education={education} />
         ))}
      </ul>
   ) : (
      <EmptyState message='No education history recorded' />
   );
}

function EducationItem({ education }: { education: string }) {
   return (
      <li className='flex items-center'>
         <GraduationCap className='mr-2 h-4 w-4 text-muted-foreground' />
         {education}
      </li>
   );
}
