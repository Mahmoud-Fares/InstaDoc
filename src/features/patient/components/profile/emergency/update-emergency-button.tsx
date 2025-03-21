import { useNavigate } from 'react-router-dom';

import { Button } from '@/shared/components/ui/button';

import { ViewToCurrentUser } from '@/features/auth';
import { Patient } from '@/features/patient';

type UpdateEmergencyContactButtonProps = {
   patient: Patient;
};

export default function UpdateEmergencyContactButton({
   patient,
}: UpdateEmergencyContactButtonProps) {
   const navigate = useNavigate();

   return (
      <ViewToCurrentUser profile={patient}>
         <Button
            variant='outline'
            size='sm'
            className='w-full'
            onClick={() => navigate('/settings')}
         >
            Update Emergency Contact
         </Button>
      </ViewToCurrentUser>
   );
}
