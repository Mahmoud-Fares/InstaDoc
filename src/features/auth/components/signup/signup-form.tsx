'use no memo';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

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
import { PasswordInput } from '@/shared/components/ui/password';
import { PhoneInput } from '@/shared/components/ui/phone';
import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from '@/shared/components/ui/select';

import { useAuth } from '@/features/auth';
import { registerSchema } from '@/features/auth/schema';
import { RegisterCredentialsType } from '@/features/auth/types';

export function SignupForm() {
   const { register, isLoading } = useAuth();

   const form = useForm<RegisterCredentialsType>({
      resolver: zodResolver(registerSchema),
      defaultValues: {
         name: '',
         email: '',
         password: '',
         confirmPassword: '',
         gender: 'male',
         role: 'patient',
      },
   });

   async function onSubmit(values: RegisterCredentialsType) {
      try {
         await register(values);
      } catch (error: any) {
         const errorMessage =
            error.response.data.message ||
            'Failed to submit the form. Please try again.';

         console.error('Form submission error', errorMessage);
         toast.error(errorMessage);
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

               <FormField
                  control={form.control}
                  name='gender'
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel>Gender</FormLabel>
                        <Select
                           onValueChange={field.onChange}
                           defaultValue={field.value}
                        >
                           <FormControl>
                              <SelectTrigger>
                                 <SelectValue placeholder='Select a gender' />
                              </SelectTrigger>
                           </FormControl>

                           <SelectContent>
                              <SelectItem value='male'>Male</SelectItem>
                              <SelectItem value='female'>Female</SelectItem>
                           </SelectContent>
                        </Select>

                        <FormMessage />
                     </FormItem>
                  )}
               />

               <FormField
                  control={form.control}
                  name='role'
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel>Role</FormLabel>
                        <Select
                           onValueChange={field.onChange}
                           defaultValue={field.value}
                        >
                           <FormControl>
                              <SelectTrigger>
                                 <SelectValue placeholder='Select a role' />
                              </SelectTrigger>
                           </FormControl>

                           <SelectContent>
                              <SelectItem value='patient'>Patient</SelectItem>
                              <SelectItem value='doctor'>Doctor</SelectItem>
                           </SelectContent>
                        </Select>

                        <FormMessage />
                     </FormItem>
                  )}
               />

               <Button type='submit' className='w-full' disabled={isLoading}>
                  {isLoading ? <Spinner /> : 'Register'}
               </Button>
            </div>
         </form>
      </Form>
   );
}
