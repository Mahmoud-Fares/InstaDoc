import { Clock, Plus, Trash2 } from 'lucide-react';
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
import { Input } from '@/shared/components/ui/input';
import { Label } from '@/shared/components/ui/label';
import { Separator } from '@/shared/components/ui/separator';

import { DayOfWeek, Doctor } from '@/features/doctor/types/doctor';

type UpdateAvailabilityProps = {
   currentUser: Doctor;
};

export default function UpdateAvailability({
   currentUser,
}: UpdateAvailabilityProps) {
   const navigate = useNavigate();

   const schedule = currentUser.schedule;

   return (
      <Card>
         <CardHeader>
            <CardTitle className='flex items-center'>
               <Clock className='mr-2 h-5 w-5' />
               Availability Schedule
            </CardTitle>
            <CardDescription>
               Set your working hours for each day of the week
            </CardDescription>
         </CardHeader>

         <CardContent>
            <div className='space-y-6'>
               {(Object.keys(schedule) as DayOfWeek[]).map((day) => (
                  <div key={day} className='space-y-3'>
                     <div className='flex items-center justify-between'>
                        <h3 className='text-lg font-medium capitalize'>
                           {day}
                        </h3>
                        <Button
                           variant='outline'
                           size='sm'
                           className='flex items-center'
                        >
                           <Plus className='mr-1 h-4 w-4' />
                           Add Time Slot
                        </Button>
                     </div>

                     {schedule[day].length === 0 ? (
                        <p className='text-sm text-muted-foreground'>
                           No availability set for this day
                        </p>
                     ) : (
                        <div className='space-y-3'>
                           {schedule[day].map((slot, index) => (
                              <div
                                 key={index}
                                 className='flex items-center gap-3'
                              >
                                 <div className='grid flex-1 grid-cols-2 gap-3'>
                                    <div className='space-y-1'>
                                       <Label htmlFor={`${day}-start-${index}`}>
                                          Start Time
                                       </Label>
                                       <Input
                                          id={`${day}-start-${index}`}
                                          type='time'
                                          value={slot.start}
                                       />
                                    </div>
                                    <div className='space-y-1'>
                                       <Label htmlFor={`${day}-end-${index}`}>
                                          End Time
                                       </Label>
                                       <Input
                                          id={`${day}-end-${index}`}
                                          type='time'
                                          value={slot.end}
                                       />
                                    </div>
                                 </div>
                                 <Button
                                    variant='ghost'
                                    size='icon'
                                    className='mt-6 text-destructive hover:bg-destructive/10 hover:text-destructive'
                                 >
                                    <Trash2 className='h-4 w-4' />
                                 </Button>
                              </div>
                           ))}
                        </div>
                     )}

                     {day !== 'sunday' && <Separator className='mt-4' />}
                  </div>
               ))}
            </div>
         </CardContent>

         <CardFooter className='flex justify-end space-x-2'>
            <Button
               variant='outline'
               onClick={() => navigate(`/profile/${currentUser.slug}`)}
            >
               Cancel
            </Button>
            <Button>Save Availability</Button>
         </CardFooter>
      </Card>
   );
}
