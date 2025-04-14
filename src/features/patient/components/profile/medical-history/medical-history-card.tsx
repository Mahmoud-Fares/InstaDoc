import { Clock } from 'lucide-react';

import { Badge } from '@/shared/components/ui/badge';

import { Appointment } from '@/features/appointment';

type MedicalHistoryCardProps = {
   appointment: Appointment;
};

export default function MedicalHistoryCard({
   appointment,
}: MedicalHistoryCardProps) {
   return (
      <div>
         <div className='flex items-center'>
            <Clock className='mr-2 h-4 w-4 text-muted-foreground' />

            <p className='font-medium'>
               {new Date(appointment.date).toLocaleDateString()} at{' '}
               {new Date(appointment.date).toLocaleTimeString()}
            </p>

            <Badge
               className='ml-2'
               variant={
                  appointment.status === 'served' ? 'default' : 'destructive'
               }
            >
               {appointment.status.charAt(0).toUpperCase() +
                  appointment.status.slice(1)}
            </Badge>
         </div>

         <p className='mt-1 text-sm'>{appointment.reason}</p>

         {appointment.notes && (
            <div className='mt-2 rounded-md bg-muted p-2'>
               <p className='text-sm font-medium'>Notes:</p>
               <p className='text-sm text-muted-foreground'>
                  {appointment.notes}
               </p>
            </div>
         )}
      </div>
   );
}
