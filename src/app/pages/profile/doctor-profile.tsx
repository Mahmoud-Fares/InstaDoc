import Container from '@/shared/components/container';

import { Doctor } from '@/features/doctor';
import ClinicInformation from '@/features/doctor/components/profile/clinic-info';
import DoctorProfessionalInformation from '@/features/doctor/components/profile/doctor-professional-info';
import DoctorSchedule from '@/features/doctor/components/profile/doctor-schedule';

import PersonalInformation from '@/app/pages/profile/components/personal-info';

export default function DoctorProfile({ doctor }: { doctor: Doctor }) {
   return (
      <Container className='grid gap-6 md:grid-cols-3'>
         <PersonalInformation profile={doctor} />

         <DoctorProfessionalInformation
            doctor={doctor}
            className='md:col-span-2'
         />

         <ClinicInformation doctor={doctor} />

         <DoctorSchedule doctor={doctor} className='md:col-span-2' />
      </Container>
   );
}
