import AppointmentCard from '@/features/appointment/components/appointment-card';
import EmptyAppointments from '@/features/appointment/components/empty-appointments';
import { Appointment } from '@/features/appointment/types';

type AppointmentsListProps = {
   appointments: Appointment[];
};

export default function AppointmentsList({
   appointments,
}: AppointmentsListProps) {
   if (appointments.length === 0) return <EmptyAppointments />;

   return (
      <div className='space-y-4'>
         {appointments.map((appointment) => (
            <AppointmentCard key={appointment.id} appointment={appointment} />
         ))}
      </div>
   );
}
