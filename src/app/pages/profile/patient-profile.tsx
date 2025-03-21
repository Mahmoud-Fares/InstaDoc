import Container from '@/shared/components/container';

import { Patient } from '@/features/patient';
import EmergencyContact from '@/features/patient/components/profile/emergency-contact';
import MedicalHistory from '@/features/patient/components/profile/medical-history';

import PersonalInformation from '@/app/pages/profile/components/personal-info';

export default function PatientProfile({ patient }: { patient: Patient }) {
   return (
      <Container className='grid gap-6 md:grid-cols-3'>
         <PersonalInformation profile={patient} className='md:col-span-3' />

         {/* //todo add the medical info if needed */}
         {/* <div className='md:col-span-2' /> */}

         <EmergencyContact patient={patient} />

         <MedicalHistory patient={patient} />
      </Container>
   );
}
