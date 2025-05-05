import { MoreHorizontal } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/shared/components/ui/button';
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuTrigger,
} from '@/shared/components/ui/dropdown-menu';

import { useAppointmentStore } from '@/features/appointment/stores/appointment-store';
import { Appointment } from '@/features/appointment/types';

export default function AppointmentActions({
   appointment,
}: {
   appointment: Appointment;
}) {
   const navigate = useNavigate();

   const cancelAppointment = useAppointmentStore((s) => s.cancelAppointment);
   const rescheduleAppointment = useAppointmentStore(
      (s) => s.rescheduleAppointment
   );

   return (
      <DropdownMenu>
         <DropdownMenuTrigger asChild>
            <Button variant='ghost' size='icon'>
               <MoreHorizontal className='h-5 w-5' />
            </Button>
         </DropdownMenuTrigger>

         <DropdownMenuContent align='end'>
            <DropdownMenuItem
               onClick={() => navigate(`/appointments/${appointment.id}`)}
            >
               View Details
            </DropdownMenuItem>

            <DropdownMenuItem
               onClick={() => rescheduleAppointment(appointment.id)}
            >
               Reschedule
            </DropdownMenuItem>

            <DropdownMenuItem
               className='text-red-600 focus:bg-red-50 dark:focus:bg-red-950'
               onClick={() => cancelAppointment(appointment.id)}
            >
               Cancel Appointment
            </DropdownMenuItem>
         </DropdownMenuContent>
      </DropdownMenu>
   );
}
