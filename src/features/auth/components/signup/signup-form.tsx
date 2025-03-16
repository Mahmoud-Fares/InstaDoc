'use no memo';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

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
import { PasswordInput } from '@/shared/components/ui/password';

const formSchema = z
   .object({
      name: z
         .string()
         .min(2, { message: 'Name must be at least 2 characters long' }),
      email: z.string().email({ message: 'Invalid email address' }),
      password: z
         .string()
         .min(6, { message: 'Password must be at least 6 characters long' })
         .regex(/[a-zA-Z0-9]/, { message: 'Password must be alphanumeric' }),
      confirmPassword: z.string(),
   })
   .refine((data) => data.password === data.confirmPassword, {
      path: ['confirmPassword'],
      message: 'Passwords do not match',
   });

type FormValues = z.infer<typeof formSchema>;

export function SignupForm() {
   const form = useForm<FormValues>({
      resolver: zodResolver(formSchema),
      defaultValues: {
         name: '',
         email: '',
         password: '',
         confirmPassword: '',
      },
   });

   async function onSubmit(values: FormValues) {
      try {
         console.log(values);
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
         <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
            <div className='grid gap-4'>
               <FormField
                  control={form.control}
                  name='name'
                  render={({ field }) => (
                     <FormItem className='grid gap-2'>
                        <FormLabel htmlFor='name'>Full Name</FormLabel>
                        <FormControl>
                           <Input id='name' placeholder='John Doe' {...field} />
                        </FormControl>
                        <FormMessage />
                     </FormItem>
                  )}
               />

               <FormField
                  control={form.control}
                  name='email'
                  render={({ field }) => (
                     <FormItem className='grid gap-2'>
                        <FormLabel htmlFor='email'>Email</FormLabel>
                        <FormControl>
                           <Input
                              id='email'
                              placeholder='johndoe@mail.com'
                              type='email'
                              autoComplete='email'
                              {...field}
                           />
                        </FormControl>
                        <FormMessage />
                     </FormItem>
                  )}
               />

               <FormField
                  control={form.control}
                  name='password'
                  render={({ field }) => (
                     <FormItem className='grid gap-2'>
                        <FormLabel htmlFor='password'>Password</FormLabel>
                        <FormControl>
                           <PasswordInput
                              id='password'
                              placeholder='******'
                              autoComplete='new-password'
                              {...field}
                           />
                        </FormControl>
                        <FormMessage />
                     </FormItem>
                  )}
               />

               <FormField
                  control={form.control}
                  name='confirmPassword'
                  render={({ field }) => (
                     <FormItem className='grid gap-2'>
                        <FormLabel htmlFor='confirmPassword'>
                           Confirm Password
                        </FormLabel>
                        <FormControl>
                           <PasswordInput
                              id='confirmPassword'
                              placeholder='******'
                              autoComplete='new-password'
                              {...field}
                           />
                        </FormControl>
                        <FormMessage />
                     </FormItem>
                  )}
               />

               <Button type='submit' className='w-full'>
                  Register
               </Button>
            </div>
         </form>
      </Form>
   );
}
