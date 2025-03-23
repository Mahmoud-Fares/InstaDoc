import { useNavigate } from 'react-router-dom';

import { Button } from '@/shared/components/ui/button';

export default function UpdateEmergencyContactButton() {
   const navigate = useNavigate();

   return (
      <Button
         variant='outline'
         size='sm'
         className='w-full'
         onClick={() => navigate('/settings?active-tab=emergency')}
      >
         Update Emergency Contact
      </Button>
   );
}
