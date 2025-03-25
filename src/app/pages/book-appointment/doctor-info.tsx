import { Mail, MapPin, Phone } from 'lucide-react';

import ProfileAvatar from '@/shared/components/profile-avatar';
import {
   Card,
   CardContent,
   CardDescription,
   CardHeader,
   CardTitle,
} from '@/shared/components/ui/card';
import { cn } from '@/shared/lib/utils';
import { Doctor } from '@/shared/types/doctor';

type DoctorInfoProps = {
   doctor: Doctor;
   className?: string;
};

export const DoctorInfo = ({ doctor, className }: DoctorInfoProps) => (
   <Card className={cn(className)}>
      <CardHeader>
         <CardTitle>Provider Information</CardTitle>
         <CardDescription>Booking with</CardDescription>
      </CardHeader>
      <CardContent className='flex flex-col items-center'>
         <ProfileAvatar profile={doctor} className='mb-4 size-24' />

         <h3 className='text-xl font-bold'>{doctor.name}</h3>
         <p className='text-sm text-muted-foreground'>
            {doctor.specialties.join(', ')}
         </p>

         <div className='mt-6 w-full space-y-3'>
            <div className='flex items-center'>
               <MapPin className='mr-2 h-4 w-4 text-muted-foreground' />
               <p className='text-sm'>{doctor.clinicInfo.address}</p>
            </div>
            <div className='flex items-center'>
               <Phone className='mr-2 h-4 w-4 text-muted-foreground' />
               <p className='text-sm'>{doctor.clinicInfo.phone}</p>
            </div>
            <div className='flex items-center'>
               <Mail className='mr-2 h-4 w-4 text-muted-foreground' />
               <p className='text-sm'>{doctor.email}</p>
            </div>
         </div>

         <div className='mt-6 w-full rounded-lg bg-muted p-4'>
            <h4 className='mb-2 font-medium'>About</h4>
            <p className='text-sm text-muted-foreground'>{doctor.bio}</p>
         </div>
      </CardContent>
   </Card>
);
