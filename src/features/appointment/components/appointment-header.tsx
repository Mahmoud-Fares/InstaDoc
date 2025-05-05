import { useNavigate } from 'react-router-dom';

import { Button } from '@/shared/components/ui/button';

export default function AppointmentHeader() {
   const navigate = useNavigate();

   return (
      <div className='flex flex-col gap-3'>
         <h1 className='text-3xl font-bold'>My Appointments</h1>

         <div className='flex justify-between'>
            <p className='text-muted-foreground'>
               Manage your scheduled appointments and medical visits
            </p>

            <Button
               onClick={() =>
                  navigate('/find-doctor', { viewTransition: true })
               }
            >
               Book New Appointment
            </Button>
         </div>
      </div>
   );
}
