import ProfileAvatar from '@/shared/components/profile-avatar';
import {
   Card,
   CardContent,
   CardFooter,
   CardHeader,
} from '@/shared/components/ui/card';
import { cn } from '@/shared/lib/utils';
import { Doctor } from '@/shared/types';

import DoctorRating from '../doctor-rating';
import { CardClinicInfo } from './card-clinic-info';
import { CardFirstAvailableTime } from './card-first-available-time';
import { CardFooterButtons } from './card-footer-btns';
import { DoctorCardHeader } from './card-header';

type DoctorCardProps = {
   doctor: Doctor;
};

export const DoctorCard = ({ doctor }: DoctorCardProps) => {
   return (
      <Card className='sm:grid sm:grid-cols-4'>
         <CardHeader
            className={cn(
               'flex flex-row flex-wrap items-center gap-4',
               'sm:flex-col sm:gap-1'
            )}
         >
            <ProfileAvatar profile={doctor} className='size-24' />

            <div>
               <DoctorCardHeader doctor={doctor} className='sm:hidden' />

               <DoctorRating doctor={doctor} className='sm:justify-center' />
            </div>
         </CardHeader>

         <div className='sm:col-span-3'>
            <CardContent className='grid gap-2 sm:pt-6'>
               <DoctorCardHeader doctor={doctor} className='max-sm:hidden' />

               <CardClinicInfo doctor={doctor} />

               <CardFirstAvailableTime doctor={doctor} />
            </CardContent>

            <CardFooter
               className={cn(
                  'flex flex-wrap justify-end gap-3',
                  '[@media(max-width:375px)]:*:w-full'
               )}
            >
               <CardFooterButtons doctor={doctor} />
            </CardFooter>
         </div>
      </Card>
   );
};
