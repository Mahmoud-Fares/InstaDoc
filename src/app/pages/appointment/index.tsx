import { useState } from 'react';

import Container from '@/shared/components/container';
import {
   Tabs,
   TabsContent,
   TabsList,
   TabsTrigger,
} from '@/shared/components/ui/tabs';

import AppointmentHeader from '@/features/appointment/components/appointment-header';
import AppointmentsList from '@/features/appointment/components/appointments-list';
import { useAppointmentStore } from '@/features/appointment/stores/appointment-store';
import { useAuth } from '@/features/auth';

export default function AppointmentsPage() {
   const { currentUser } = useAuth();
   const getUserAppointments = useAppointmentStore(
      (s) => s.getUserAppointments
   );

   const appointments = getUserAppointments(currentUser!.id);

   const [upcomingAppointments] = useState(() =>
      appointments.filter((a) => new Date(a.date) > new Date())
   );
   const [pastAppointments] = useState(() =>
      appointments.filter((a) => new Date(a.date) < new Date())
   );

   return (
      <Container className='space-y-4 py-10'>
         <AppointmentHeader />

         <Tabs defaultValue='upcoming' className='space-y-4'>
            <TabsList className='flex h-fit w-fit flex-wrap justify-start gap-2 p-2 *:flex-1'>
               <TabsTrigger value='upcoming'>Upcoming</TabsTrigger>
               <TabsTrigger value='past'>Past</TabsTrigger>
            </TabsList>

            <TabsContent value='upcoming'>
               <AppointmentsList appointments={upcomingAppointments} />
            </TabsContent>

            <TabsContent value='past'>
               <AppointmentsList appointments={pastAppointments} />
            </TabsContent>
         </Tabs>
      </Container>
   );
}
