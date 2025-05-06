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

import { useAuth } from '@/features/auth';
import { loginSchema } from '@/features/auth/schema';
import { LoginCredentialsType } from '@/features/auth/types';

export function LoginForm() {
   const { login, isLoading } = useAuth();

   const form = useForm<LoginCredentialsType>({
      resolver: zodResolver(loginSchema),
      defaultValues: {
         email: 'patient@email.com',
         password: 'password',
      },
   });

   const handleSubmit = async (values: LoginCredentialsType) => {
      try {
         await login(values);
      } catch (error: any) {
         const errorMessage =
            error.response.data.msg ||
            'Failed to submit the form. Please try again.';

         console.error('Form submission error', errorMessage);
         toast.error(errorMessage);
      }
   };

   return (
      <Form {...form}>
         <form onSubmit={form.handleSubmit(handleSubmit)} className='space-y-8'>
            <div className='grid gap-4'>
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
                              autoComplete='current-password'
                              {...field}
                           />
                        </FormControl>
                        <FormMessage />
                     </FormItem>
                  )}
               />

               <Button type='submit' className='w-full' disabled={isLoading}>
                  {isLoading ? <Spinner /> : 'Login'}
               </Button>
            </div>
         </form>
      </Form>
   );
}
