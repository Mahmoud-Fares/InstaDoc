import { useEffect, useState } from 'react';

import { toast } from 'sonner';

import { Button } from '@/shared/components/ui/button';
import { Calendar } from '@/shared/components/ui/calendar';
import { Label } from '@/shared/components/ui/label';
import { Textarea } from '@/shared/components/ui/textarea';
import { Doctor } from '@/shared/types/doctor';

import { generateAvailableSlots } from '@/features/appointment/utils';

type BookingFormProps = {
   doctor: Doctor;
};

export const BookingForm = ({ doctor }: BookingFormProps) => {
   const [selectedDate, setSelectedDate] = useState<Date | undefined>(
      new Date()
   );
   const [availableSlots, setAvailableSlots] = useState<string[]>([]);
   const [selectedSlot, setSelectedSlot] = useState<string | undefined>(
      undefined
   );

   useEffect(() => {
      const availableSlots = generateAvailableSlots(
         doctor,
         selectedDate?.toISOString().split('T')[0] || ''
      );
      setAvailableSlots(availableSlots);
   }, [selectedDate, doctor]);

   function onSubmit(event: React.FormEvent<HTMLFormElement>) {
      event.preventDefault();

      toast.error('No Logic is implemented for booking an appointment yet');
   }

   return (
      <form className='space-y-6' onSubmit={onSubmit}>
         <div className='space-y-2'>
            <Label>Select Date</Label>

            <Calendar
               mode='single'
               className='w-fit rounded-md border'
               disabled={{ before: new Date() }}
               selected={selectedDate}
               onSelect={setSelectedDate}
            />
         </div>

         <div>
            <Label>Available Time Slots</Label>
            <div className='mt-2 grid grid-cols-3 gap-2'>
               {availableSlots.length > 0 ? (
                  availableSlots.map((slot) => (
                     <Button
                        key={slot}
                        type='button'
                        variant={selectedSlot === slot ? 'default' : 'outline'}
                        className='justify-center'
                        onClick={() => setSelectedSlot(slot)}
                     >
                        {slot}
                     </Button>
                  ))
               ) : (
                  <p className='col-span-3 text-sm text-muted-foreground'>
                     No available slots for selected date
                  </p>
               )}
            </div>
         </div>

         <div className='space-y-2'>
            <Label htmlFor='reason'>Reason for Visit</Label>
            <Textarea
               id='reason'
               placeholder='Please briefly describe the reason for your visit'
               required
               className='h-auto min-h-20 resize-none'
            />
         </div>

         <div className='space-y-2'>
            <Label htmlFor='notes'>Additional Notes (Optional)</Label>
            <Textarea
               id='notes'
               placeholder='Any additional information that might be helpful for your provider'
               className='min-h-20 resize-none'
            />
         </div>

         <Button type='submit'>Book Appointment</Button>
      </form>
   );
};
