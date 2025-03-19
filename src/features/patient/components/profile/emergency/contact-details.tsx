import { Patient } from '@/features/patient';

type EmergencyContactDetailsProps = {
   patient: Patient;
};

export default function EmergencyContactDetails({
   patient,
}: EmergencyContactDetailsProps) {
   return (
      <div className='space-y-2'>
         <p className='font-medium'>{patient.emergencyContact!.name}</p>

         <p className='text-sm text-muted-foreground'>
            Relationship: {patient.emergencyContact!.relationship}
         </p>

         <p className='text-sm text-muted-foreground'>
            Phone: {patient.emergencyContact!.phone}
         </p>
      </div>
   );
}
