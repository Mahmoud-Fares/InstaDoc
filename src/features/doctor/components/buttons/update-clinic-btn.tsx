import { useNavigate } from 'react-router-dom';

import { Button } from '@/shared/components/ui/button';

export default function UpdateClinicButton() {
   const navigate = useNavigate();

   return (
      <Button
         variant='outline'
         size='sm'
         className='w-full'
         onClick={() => navigate('/settings?active-tab=clinic')}
      >
         Update Clinic Information
      </Button>
   );
}
