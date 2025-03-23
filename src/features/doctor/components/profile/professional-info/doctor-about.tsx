import EmptyState from '@/shared/components/empty-state';
import { Doctor } from '@/shared/types';

export default function DoctorAbout({ doctor }: { doctor: Doctor }) {
   return doctor.bio ? (
      <p>{doctor.bio}</p>
   ) : (
      <EmptyState message='No about information recorded' />
   );
}
