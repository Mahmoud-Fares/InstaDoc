import { Calendar, Clock, MapPin, Video } from 'lucide-react';

import ProfileAvatar from '@/shared/components/profile-avatar';
import { Card, CardContent } from '@/shared/components/ui/card';

import AppointmentActions from '@/features/appointment/components/appointment-card/appointment-actions';
import { AppointmentForCard } from '@/features/appointment/types';

type AppointmentDoctorCardProps = {
   appointment: AppointmentForCard;
};

export default function AppointmentDoctorCard({
   appointment,
}: AppointmentDoctorCardProps) {
   return (
      <Card>
         <CardContent className='p-6'>
            <div className='flex items-start justify-between'>
               <div className='flex items-start space-x-4'>
                  <ProfileAvatar
                     profile={appointment.patient}
                     className='h-12 w-12'
                  />

                  <div>
                     <h3 className='font-medium'>
                        {appointment.patient?.name}
                     </h3>

                     <div className='mt-2 flex items-center'>
                        <Calendar className='mr-2 h-4 w-4 text-muted-foreground' />
                        <p className='text-sm'>
                           {new Date(appointment.date).toLocaleDateString(
                              'en-US',
                              {
                                 weekday: 'long',
                                 month: 'long',
                                 day: 'numeric',
                                 year: 'numeric',
                              }
                           )}
                        </p>
                     </div>

                     <div className='mt-1 flex items-center'>
                        <Clock className='mr-2 h-4 w-4 text-muted-foreground' />
                        <p className='text-sm'>
                           {appointment.startTime} - {appointment.endTime}
                        </p>
                     </div>

                     <div className='mt-1 flex items-center'>
                        {appointment.type === 'virtual' ? (
                           <Video className='mr-2 h-4 w-4 text-muted-foreground' />
                        ) : (
                           <MapPin className='mr-2 h-4 w-4 text-muted-foreground' />
                        )}
                        <p className='text-sm'>
                           {appointment.type === 'virtual'
                              ? 'Virtual Visit'
                              : 'In-Person Visit'}
                        </p>
                     </div>

                     <p className='mt-2 text-sm font-medium'>
                        Reason: {appointment.reason}
                     </p>

                     {appointment.notes && (
                        <div className='mt-2 rounded-md bg-muted p-2'>
                           <p className='text-sm font-medium'>Notes:</p>
                           <p className='text-sm text-muted-foreground'>
                              {appointment.notes}
                           </p>
                        </div>
                     )}
                  </div>
               </div>

               <AppointmentActions appointment={appointment} />
            </div>

            {/* join the appointment btn */}
            {/* <div className='mt-4 flex flex-wrap gap-2'>
               {new Date(appointment.date) <=
                  new Date(new Date().setDate(new Date().getDate() + 1)) && (
                  <Button size='sm' className='bg-green-600 hover:bg-green-700'>
                     {appointment.type === 'virtual'
                        ? 'Join Virtual Visit'
                        : 'Check In'}
                  </Button>
               )}
            </div> */}
         </CardContent>
      </Card>
   );
}
