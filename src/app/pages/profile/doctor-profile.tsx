import Container from '@/shared/components/container';

import { DOCTORS } from '@/features/doctor';
import ClinicInformation from '@/features/doctor/components/profile/clinic-info';
import DoctorPersonalInformation from '@/features/doctor/components/profile/doctor-personal-info';
import DoctorProfessionalInformation from '@/features/doctor/components/profile/doctor-professional-info';
import DoctorSchedule from '@/features/doctor/components/profile/doctor-schedule';

export default function DoctorProfile() {
   const profile = DOCTORS[0];

   return (
      <Container className='grid gap-6 md:grid-cols-3'>
         <DoctorPersonalInformation profile={profile} />

         <DoctorProfessionalInformation profile={profile} />

         <ClinicInformation profile={profile} />

         <DoctorSchedule profile={profile} />
      </Container>
   );
}
