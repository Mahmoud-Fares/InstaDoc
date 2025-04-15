'use no memo';

import { zodResolver } from '@hookform/resolvers/zod';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import * as z from 'zod';

import Spinner from '@/shared/components/spinner';
import { Button } from '@/shared/components/ui/button';
import { Calendar } from '@/shared/components/ui/calendar';
import {
   Form,
   FormControl,
   FormField,
   FormItem,
   FormLabel,
   FormMessage,
} from '@/shared/components/ui/form';
import { Input } from '@/shared/components/ui/input';
import { PhoneInput } from '@/shared/components/ui/phone';
import {
   Popover,
   PopoverContent,
   PopoverTrigger,
} from '@/shared/components/ui/popover';
import { personalSchema } from '@/shared/lib/schema/personal-schema';
import { cn, wait } from '@/shared/lib/utils';
import { AuthUser } from '@/shared/types';

export default function PersonalSettingsForm({
   currentUser,
}: {
   currentUser: AuthUser;
}) {
   const navigate = useNavigate();

   const form = useForm<z.infer<typeof personalSchema>>({
      resolver: zodResolver(personalSchema),
      defaultValues: {
         fullName: currentUser.name,
         email: currentUser.email,
         phone: currentUser.phone,
         address: currentUser.governorate,
         dateOfBirth: new Date(currentUser.dateOfBirth),
      },
   });

   async function onSubmit(values: z.infer<typeof personalSchema>) {
      try {
         console.log(values);
         await wait(1500);
         toast(
            <pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
               <code className='text-white'>
                  {JSON.stringify(values, null, 2)}
               </code>
            </pre>
         );
      } catch (error) {
         console.error('Form submission error', error);
         toast.error('Failed to submit the form. Please try again.');
      }
   }

   return (
      <Form {...form}>
         <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className='grid gap-4 md:grid-cols-2'>
               <FormField
                  control={form.control}
                  name='fullName'
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                           <Input placeholder='' type='text' {...field} />
                        </FormControl>

                        <FormMessage />
                     </FormItem>
                  )}
               />

               <FormField
                  control={form.control}
                  name='email'
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                           <Input placeholder='' type='email' {...field} />
                        </FormControl>

                        <FormMessage />
                     </FormItem>
                  )}
               />

               <FormField
                  control={form.control}
                  name='phone'
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel>Phone number</FormLabel>
                        <FormControl className='w-full'>
                           <PhoneInput
                              placeholder='(555) 234-5678'
                              {...field}
                              defaultCountry='EG'
                           />
                        </FormControl>
                        <FormMessage />
                     </FormItem>
                  )}
               />

               <FormField
                  control={form.control}
                  name='address'
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel>Address</FormLabel>
                        <FormControl>
                           <Input
                              placeholder='123 Medical Pkwy, Boston, MA 02215'
                              type='text'
                              {...field}
                           />
                        </FormControl>

                        <FormMessage />
                     </FormItem>
                  )}
               />

               <FormField
                  control={form.control}
                  name='dateOfBirth'
                  render={({ field }) => (
                     <FormItem className='flex flex-col'>
                        <FormLabel>Date of birth</FormLabel>
                        <Popover>
                           <PopoverTrigger asChild>
                              <FormControl>
                                 <Button
                                    variant={'outline'}
                                    className={cn(
                                       'text-left font-normal',
                                       !field.value && 'text-muted-foreground'
                                    )}
                                 >
                                    {field.value ? (
                                       format(field.value, 'PPP')
                                    ) : (
                                       <span>Pick a date</span>
                                    )}
                                    <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
                                 </Button>
                              </FormControl>
                           </PopoverTrigger>
                           <PopoverContent className='w-auto p-0' align='start'>
                              <Calendar
                                 mode='single'
                                 selected={field.value}
                                 onSelect={field.onChange}
                                 initialFocus
                                 defaultMonth={field.value}
                              />
                           </PopoverContent>
                        </Popover>

                        <FormMessage />
                     </FormItem>
                  )}
               />
            </div>

            <div
               className={cn(
                  'flex flex-col-reverse gap-2 pt-4',
                  'sm:flex-row sm:items-center sm:justify-end'
               )}
            >
               <Button
                  type='reset'
                  disabled={form.formState.isSubmitting}
                  variant='outline'
                  size='lg'
                  onClick={() =>
                     navigate(`/profile/${currentUser?.slug}`, {
                        viewTransition: true,
                     })
                  }
               >
                  Cancel
               </Button>

               <Button type='submit' disabled={form.formState.isSubmitting}>
                  {form.formState.isSubmitting ? (
                     <Spinner className='h-4 w-4' />
                  ) : (
                     'Save Changes'
                  )}
               </Button>
            </div>
         </form>
      </Form>
   );
}
