'use no memo';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

import { useAuth } from '@/features/auth';
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

const formSchema = z.object({
   email: z.string().email({ message: 'Invalid email address' }),
   password: z
      .string()
      .min(6, { message: 'Password must be at least 6 characters long' })
      .regex(/[a-zA-Z0-9]/, { message: 'Password must be alphanumeric' }),
});

export type LoginFormValues = z.infer<typeof formSchema>;

export function LoginForm() {
   const { login, isLoading } = useAuth();

   const form = useForm<LoginFormValues>({
      resolver: zodResolver(formSchema),
      defaultValues: {
         email: 'patient@email.com',
         password: 'password',
      },
   });

   const handleSubmit = async (values: LoginFormValues) => {
      try {
         await login(values);
      } catch (error) {
         console.error('Form submission error', error);
         toast.error('Failed to submit the form. Please try again.');
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
                  {isLoading ? 'Logging in...' : 'Login'}
               </Button>
            </div>
         </form>
      </Form>
   );
}
