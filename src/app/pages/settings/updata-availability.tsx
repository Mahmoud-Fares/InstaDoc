import Container from '@/shared/components/container';

import AvailabilitySettings from '@/features/doctor/components/settings/availability';

export default function UpdateAvailabilityPage() {
   return (
      <>
         <Container className='py-10'>
            <h1 className='mb-6 text-3xl font-bold'>Update Availability</h1>

            <AvailabilitySettings />
         </Container>
      </>
   );
}
