import { Link } from 'react-router-dom';

import { Button } from '@/shared/components/ui/button';
import { Doctor } from '@/shared/types';

export const CardFooterButtons = ({ doctor }: { doctor: Doctor }) => {
   return (
      <>
         <Button variant='outline' asChild>
            <Link to={`/profile/${doctor.slug}`}>View Profile</Link>
         </Button>

         <Button asChild>
            <Link to={`/book-appointment?doctor=${doctor.id}`}>
               Book Appointment
            </Link>
         </Button>
      </>
   );
};
