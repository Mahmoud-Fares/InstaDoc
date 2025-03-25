import {
   Card,
   CardContent,
   CardDescription,
   CardHeader,
   CardTitle,
} from '@/shared/components/ui/card';
import { cn } from '@/shared/lib/utils';
import { Doctor } from '@/shared/types/doctor';

import { BookingForm } from './booking-form';

type BookingInfoProps = {
   doctor: Doctor;
   className?: string;
};

export const BookingInfo = ({ doctor, className }: BookingInfoProps) => (
   <Card className={cn(className)}>
      <CardHeader>
         <CardTitle>Schedule Your Appointment</CardTitle>
         <CardDescription>
            Select your preferred date, time, and type of appointment
         </CardDescription>
      </CardHeader>

      <CardContent>
         <BookingForm doctor={doctor} />
      </CardContent>
   </Card>
);
