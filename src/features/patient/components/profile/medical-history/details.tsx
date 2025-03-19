import { Appointment } from '@/features/appointment';

import MedicalHistoryCard from './medical-history-card';

type MedicalHistoryDetailsProps = { medicalHistory: Appointment[] };

export default function MedicalHistoryDetails({
   medicalHistory,
}: MedicalHistoryDetailsProps) {
   return (
      <div className='space-y-4'>
         {medicalHistory.slice(0, 5).map((appointment) => (
            <div
               key={appointment.id}
               className='border-b pb-4 last:border-0 last:pb-0'
            >
               <MedicalHistoryCard appointment={appointment} />
            </div>
         ))}
      </div>
   );
}
