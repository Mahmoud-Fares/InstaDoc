'use no memo';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import * as z from 'zod';

import {
   AlertDialog,
   AlertDialogAction,
   AlertDialogCancel,
   AlertDialogContent,
   AlertDialogDescription,
   AlertDialogFooter,
   AlertDialogHeader,
   AlertDialogTitle,
   AlertDialogTrigger,
} from '@/shared/components/ui/alert-dialog';
import { Button } from '@/shared/components/ui/button';
import {
   Form,
   FormControl,
   FormField,
   FormItem,
   FormLabel,
   FormMessage,
} from '@/shared/components/ui/form';
import { PasswordInput } from '@/shared/components/ui/password';
import { securitySchema } from '@/shared/lib/schema/security-schema';

export default function SecurityForm() {
   const form = useForm<z.infer<typeof securitySchema>>({
      resolver: zodResolver(securitySchema),
      defaultValues: {
         currentPassword: '',
         newPassword: '',
         confirmPassword: '',
      },
   });

   function onSubmit(values: z.infer<typeof securitySchema>) {
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
            <FormField
               control={form.control}
               name='currentPassword'
               render={({ field }) => (
                  <FormItem>
                     <FormLabel>Current Password</FormLabel>
                     <FormControl>
                        <PasswordInput placeholder='' {...field} />
                     </FormControl>

                     <FormMessage />
                  </FormItem>
               )}
            />

            <FormField
               control={form.control}
               name='newPassword'
               render={({ field }) => (
                  <FormItem>
                     <FormLabel>New Password</FormLabel>
                     <FormControl>
                        <PasswordInput placeholder='' {...field} />
                     </FormControl>

                     <FormMessage />
                  </FormItem>
               )}
            />

            <FormField
               control={form.control}
               name='confirmPassword'
               render={({ field }) => (
                  <FormItem>
                     <FormLabel>Confirm New Password</FormLabel>
                     <FormControl>
                        <PasswordInput placeholder='' {...field} />
                     </FormControl>

                     <FormMessage />
                  </FormItem>
               )}
            />

            <div className='flex flex-wrap items-center justify-between gap-4 *:flex-1 *:sm:max-w-fit'>
               <Button type='submit'>Change Password</Button>
               <DeleteAccount />
            </div>
         </form>
      </Form>
   );
}

function DeleteAccount() {
   return (
      <AlertDialog>
         <AlertDialogTrigger asChild>
            <Button variant='destructive'>Delete Account</Button>
         </AlertDialogTrigger>
         <AlertDialogContent>
            <AlertDialogHeader>
               <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
               <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove all your data from our servers.
               </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
               <AlertDialogCancel>Cancel</AlertDialogCancel>
               <AlertDialogAction className='bg-destructive text-destructive-foreground'>
                  Delete Account
               </AlertDialogAction>
            </AlertDialogFooter>
         </AlertDialogContent>
      </AlertDialog>
   );
}
