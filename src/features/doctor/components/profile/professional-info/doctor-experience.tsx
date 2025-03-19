import { Briefcase } from 'lucide-react';

import EmptyState from '@/shared/components/empty-state';

import { Doctor } from '@/features/doctor/types/doctor';

export default function DoctorExperience({ doctor }: { doctor: Doctor }) {
   return doctor.experience && doctor.experience.length > 0 ? (
      <ul className='space-y-2'>
         {doctor.experience.map((experience: string, index: number) => (
            <ExperienceItem key={index} experience={experience} />
         ))}
      </ul>
   ) : (
      <EmptyState message='No experience recorded' />
   );
}

function ExperienceItem({ experience }: { experience: string }) {
   return (
      <li className='flex items-center'>
         <Briefcase className='mr-2 h-4 w-4 text-muted-foreground' />
         {experience}
      </li>
   );
}
