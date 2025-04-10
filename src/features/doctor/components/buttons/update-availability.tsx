import { useNavigate } from 'react-router-dom';

import { Button } from '@/shared/components/ui/button';

export default function UpdateAvailabilityButton() {
   const navigate = useNavigate();

   return (
      <Button
         variant='outline'
         className='w-full'
         onClick={() =>
            navigate('/update-availability', { viewTransition: true })
         }
      >
         Update Availability
      </Button>
   );
}
