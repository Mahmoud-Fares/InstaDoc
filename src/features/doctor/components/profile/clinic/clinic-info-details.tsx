import EmptyState from '@/shared/components/empty-state';
import { Doctor } from '@/shared/types';

export default function ClinicInfoDetails({ doctor }: { doctor: Doctor }) {
   return doctor.clinicInfo ? (
      <div className='space-y-2'>
         <p className='font-medium'>{doctor.clinicInfo.name}</p>

         <p className='text-sm text-muted-foreground'>
            {doctor.clinicInfo.address}
         </p>

         <p className='text-sm text-muted-foreground'>
            Phone: {doctor.clinicInfo.phone}
         </p>
      </div>
   ) : (
      <EmptyState message='No Clinic information recorded' />
   );
}
