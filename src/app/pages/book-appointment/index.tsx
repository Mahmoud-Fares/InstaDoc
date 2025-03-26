import { useSearchParams } from 'react-router-dom';

import Container from '@/shared/components/container';

import { BookingInfo } from '@/features/appointment/components/book-appointment/booking-info';
import { DoctorInfo } from '@/features/appointment/components/book-appointment/doctor-info';
import { DOCTORS } from '@/features/doctor';

export default function BookAppointment() {
   const [searchParams] = useSearchParams();
   const doctorId = searchParams.get('doctor');

   const doctor = DOCTORS.find((doctor) => doctor.id === doctorId);

   if (!doctor) {
      return <div>Doctor not found</div>;
   }

   return (
      <Container className='py-10'>
         <h1 className='mb-6 text-3xl font-bold'>Book an Appointment</h1>

         <div className='grid grid-cols-1 gap-6 lg:grid-cols-3'>
            <DoctorInfo doctor={doctor} className='h-fit lg:col-span-1' />

            <BookingInfo doctor={doctor} className='lg:col-span-2' />
         </div>
      </Container>
   );
}
