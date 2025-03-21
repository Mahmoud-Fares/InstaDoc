import { useNavigate } from 'react-router-dom';

import { Button } from '@/shared/components/ui/button';

import { ViewToCurrentUser } from '@/features/auth';
import { Doctor } from '@/features/doctor/types/doctor';

type UpdateAvailabilityButtonProps = {
   doctor: Doctor;
};

export default function UpdateAvailabilityButton({
   doctor,
}: UpdateAvailabilityButtonProps) {
   const navigate = useNavigate();

   return (
      <ViewToCurrentUser profile={doctor}>
         <Button
            variant='outline'
            className='w-full'
            onClick={() => navigate('/update-availability')}
         >
            Update Availability
         </Button>
      </ViewToCurrentUser>
   );
}
