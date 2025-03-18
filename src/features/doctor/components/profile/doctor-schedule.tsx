import { Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/shared/components/ui/button';
import {
   Card,
   CardContent,
   CardDescription,
   CardFooter,
   CardHeader,
   CardTitle,
} from '@/shared/components/ui/card';

import { Doctor } from '@/features/doctor/types/doctor';

export default function DoctorSchedule({ profile }: { profile: Doctor }) {
   const navigate = useNavigate();

   return (
      <Card className='md:col-span-2'>
         <CardHeader>
            <CardTitle className='flex items-center'>
               <Clock className='mr-2 h-5 w-5' />
               Availability Schedule
            </CardTitle>
            <CardDescription>Your current working hours</CardDescription>
         </CardHeader>

         <CardContent>
            {profile?.schedule ? (
               <div className='space-y-4'>
                  {Object.entries(profile.schedule).map(
                     ([day, slots]: [string, any]) => (
                        <div key={day} className='flex items-start'>
                           <div className='w-24 font-medium capitalize'>
                              {day}
                           </div>
                           <div>
                              {slots.length > 0 ? (
                                 slots.map((slot: any, index: number) => (
                                    <div key={index} className='text-sm'>
                                       {slot.start} - {slot.end}
                                    </div>
                                 ))
                              ) : (
                                 <div className='text-sm text-muted-foreground'>
                                    Not available
                                 </div>
                              )}
                           </div>
                        </div>
                     )
                  )}
               </div>
            ) : (
               <p className='text-muted-foreground'>
                  No availability schedule recorded
               </p>
            )}
         </CardContent>

         <CardFooter>
            <Button
               variant='outline'
               className='w-full'
               onClick={() => navigate('/update-availability')}
            >
               Update Availability
            </Button>
         </CardFooter>
      </Card>
   );
}
