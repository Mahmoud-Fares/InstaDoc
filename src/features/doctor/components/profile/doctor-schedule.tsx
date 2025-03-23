import { Clock } from 'lucide-react';

import EmptyState from '@/shared/components/empty-state';
import {
   Card,
   CardContent,
   CardDescription,
   CardFooter,
   CardHeader,
   CardTitle,
} from '@/shared/components/ui/card';
import { cn } from '@/shared/lib/utils';
import { Doctor, Schedule } from '@/shared/types/doctor';

import { ViewToCurrentUser } from '@/features/auth';
import UpdateAvailabilityButton from '@/features/doctor/components/buttons/update-availability';
import ScheduleDetails from '@/features/doctor/components/profile/schedule/schedule-details';

type DoctorScheduleProps = {
   doctor: Doctor;
   className?: string;
};

export default function DoctorSchedule({
   doctor,
   className,
}: DoctorScheduleProps) {
   const schedule = doctor.schedule as Schedule | undefined;

   return (
      <Card className={cn(className)}>
         <CardHeader>
            <CardTitle className='flex items-center'>
               <Clock className='mr-2 h-5 w-5' />
               Availability Schedule
            </CardTitle>
            <CardDescription>Your current working hours</CardDescription>
         </CardHeader>

         <CardContent>
            {schedule ? (
               <ScheduleDetails schedule={schedule} />
            ) : (
               <EmptyState message='No availability schedule recorded' />
            )}
         </CardContent>

         <ViewToCurrentUser profile={doctor}>
            <CardFooter>
               <UpdateAvailabilityButton />
            </CardFooter>
         </ViewToCurrentUser>
      </Card>
   );
}
