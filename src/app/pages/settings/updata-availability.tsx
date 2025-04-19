import Container from '@/shared/components/container';

import AvailabilitySettings from '@/features/doctor/components/settings/availability';
import ScheduleProvider from '@/features/doctor/contexts/settings/schedule';

export default function UpdateAvailabilityPage() {
   return (
      <>
         <Container className='py-10'>
            <h1 className='mb-6 text-3xl font-bold'>Update Availability</h1>

            <ScheduleProvider>
               <AvailabilitySettings />
            </ScheduleProvider>
         </Container>
      </>
   );
}
