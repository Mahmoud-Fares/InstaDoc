import Container from '@/shared/components/container';

import UpdateAvailability from '@/features/doctor/components/settings/update-availability';
import { DOCTORS } from '@/features/doctor/mock';

export default function UpdateAvailabilityPage() {
   const currentUser = DOCTORS[0];

   return (
      <>
         <Container className='py-10'>
            <h1 className='mb-6 text-3xl font-bold'>Update Availability</h1>

            <UpdateAvailability currentUser={currentUser} />
         </Container>
      </>
   );
}
