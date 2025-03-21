import { useNavigate } from 'react-router-dom';

import { Button } from '@/shared/components/ui/button';

import { ViewToCurrentUser } from '@/features/auth';
import { Doctor } from '@/features/doctor/types/doctor';

type UpdateClinicButtonProps = {
   doctor: Doctor;
};

export default function UpdateClinicButton({
   doctor,
}: UpdateClinicButtonProps) {
   const navigate = useNavigate();

   return (
      <ViewToCurrentUser profile={doctor}>
         <Button
            variant='outline'
            size='sm'
            className='w-full'
            onClick={() => navigate('/settings')}
         >
            Update Clinic Information
         </Button>
      </ViewToCurrentUser>
   );
}
