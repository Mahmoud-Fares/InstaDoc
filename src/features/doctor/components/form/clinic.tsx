'use no memo';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import * as z from 'zod';

import Spinner from '@/shared/components/spinner';
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
import { PhoneInput } from '@/shared/components/ui/phone';
import { cn, wait } from '@/shared/lib/utils';
import { Doctor } from '@/shared/types';

import { clinicSchema } from '@/features/doctor/schema/clinic-schema';

type ClinicSettingsFormProps = {
   currentUser: Omit<Doctor, 'password'>;
};

export default function ClinicSettingsForm({
   currentUser,
}: ClinicSettingsFormProps) {
   const navigate = useNavigate();

   const form = useForm<z.infer<typeof clinicSchema>>({
      resolver: zodResolver(clinicSchema),
      defaultValues: {
         name: currentUser.clinicInfo.name,
         address: currentUser.clinicInfo.address,
         phone: currentUser.clinicInfo.phone,
      },
   });

   async function onSubmit(values: z.infer<typeof clinicSchema>) {
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
                  name='name'
                  render={({ field }) => (
                     <FormItem className='sm:col-span-2'>
                        <FormLabel>Clinic Name</FormLabel>
                        <FormControl>
                           <Input
                              placeholder='Heart Health Associates'
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
                  name='address'
                  render={({ field }) => (
                     <FormItem className='sm:col-span-2'>
                        <FormLabel>Clinic Address</FormLabel>
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
                  name='phone'
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel>Phone number</FormLabel>
                        <FormControl className='w-full'>
                           <PhoneInput
                              placeholder='+201012345688'
                              {...field}
                              defaultCountry='EG'
                           />
                        </FormControl>
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
