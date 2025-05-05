import { Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/shared/components/ui/button';
import { Card, CardContent } from '@/shared/components/ui/card';

type EmptyAppointmentsProps = {
   className?: string;
   message?: string;
};

export default function EmptyAppointments({
   className,
   message,
}: EmptyAppointmentsProps) {
   const navigate = useNavigate();

   return (
      <Card className={className}>
         <CardContent className='flex flex-col items-center justify-center p-6'>
            <Calendar className='mb-4 h-12 w-12 text-muted-foreground' />
            <p className='mb-4 text-muted-foreground'>
               {message ? message : "You don't have any appointments"}
            </p>

            <Button
               onClick={() =>
                  navigate('/find-doctor', { viewTransition: true })
               }
            >
               Book an Appointment
            </Button>
         </CardContent>
      </Card>
   );
}
