'use no memo';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

import { Button } from '@/shared/components/ui/button';
import {
   Form,
   FormControl,
   FormField,
   FormItem,
   FormLabel,
   FormMessage,
} from '@/shared/components/ui/form';
import { Input } from '@/shared/components/ui/input';
import { Switch } from '@/shared/components/ui/switch';
import { TimePicker } from '@/shared/components/ui/time-picker';
import { cn } from '@/shared/lib/utils';
import { TimeSlot } from '@/shared/types/doctor';

import {
   scheduleSchemaType,
   timeSlotFormSchema,
} from '@/features/doctor/schema/schedule-schema';
import {
   convertScheduleSchemaToTimeSlot,
   convertTimeSlotToScheduleSchema,
} from '@/features/doctor/utils/schedule';

type TimeSlotFormProps = {
   initialValues?: TimeSlot;
   onSubmit: (data: TimeSlot) => void;
   setOpen: (open: boolean) => void;
};

export default function TimeSlotForm({
   onSubmit,
   initialValues = {
      start: '09:00',
      end: '12:00',
      duration: 30,
      capacity: 1,
      isActive: false,
   },
   setOpen,
}: TimeSlotFormProps) {
   const form = useForm<scheduleSchemaType>({
      resolver: zodResolver(timeSlotFormSchema),
      defaultValues: convertTimeSlotToScheduleSchema(initialValues),
   });

   function handleSubmit(values: scheduleSchemaType) {
      try {
         console.log(values);
         onSubmit(convertScheduleSchemaToTimeSlot(values));
         toast(
            <pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
               <code className='text-white'>
                  {JSON.stringify(
                     convertScheduleSchemaToTimeSlot(values),
                     null,
                     2
                  )}
               </code>
            </pre>
         );
      } catch (error) {
         console.error('Form submission error', error);
         toast.error('Failed to submit the form. Please try again.');
      } finally {
         setOpen(false);
      }
   }

   return (
      <Form {...form}>
         <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className={cn('flex flex-col gap-3')}
         >
            <FormField
               control={form.control}
               name='start'
               render={({ field }) => (
                  <FormItem>
                     <FormLabel>Start Time</FormLabel>
                     <TimePicker className='w-full' {...field} />

                     <FormMessage />
                  </FormItem>
               )}
            />

            <FormField
               control={form.control}
               name='end'
               render={({ field }) => (
                  <FormItem>
                     <FormLabel>End Time</FormLabel>
                     <FormControl>
                        <TimePicker className='w-full' {...field} />
                     </FormControl>

                     <FormMessage />
                  </FormItem>
               )}
            />

            <FormField
               control={form.control}
               name='duration'
               render={({ field }) => (
                  <FormItem>
                     <FormLabel>Session Duration</FormLabel>
                     <FormControl>
                        <Input type='number' step={15} {...field} />
                     </FormControl>

                     <FormMessage />
                  </FormItem>
               )}
            />

            <FormField
               control={form.control}
               name='capacity'
               render={({ field }) => (
                  <FormItem>
                     <FormLabel>Max No of Patients</FormLabel>
                     <FormControl>
                        <Input type='number' {...field} />
                     </FormControl>

                     <FormMessage />
                  </FormItem>
               )}
            />

            <FormField
               control={form.control}
               name='isActive'
               render={({ field }) => (
                  <FormItem className='flex items-center justify-between rounded-md border p-4'>
                     <FormLabel>Is Active</FormLabel>

                     <FormControl>
                        <Switch
                           checked={field.value}
                           onCheckedChange={field.onChange}
                           aria-readonly
                        />
                     </FormControl>
                  </FormItem>
               )}
            />

            <Button type='submit'>Save</Button>
         </form>
      </Form>
   );
}
