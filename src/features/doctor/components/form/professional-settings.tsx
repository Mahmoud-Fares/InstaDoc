import { UseFormReturn } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
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
import { Textarea } from '@/shared/components/ui/textarea';
import { cn } from '@/shared/lib/utils';

import { useAuth } from '@/features/auth';
import { professionalSettingsSchema } from '@/features/doctor/schema/professional-settings-schema';

type ProfessionalSettingsFormProps = {
   form: UseFormReturn<z.infer<typeof professionalSettingsSchema>>;
   onSubmit: (values: z.infer<typeof professionalSettingsSchema>) => void;
};

export default function ProfessionalSettingsForm({
   form,
   onSubmit,
}: ProfessionalSettingsFormProps) {
   const navigate = useNavigate();
   const { currentUser } = useAuth();

   return (
      <Form {...form}>
         <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
            <FormField
               control={form.control}
               name='about'
               render={({ field }) => (
                  <FormItem>
                     <FormLabel>About</FormLabel>
                     <FormControl>
                        <Textarea
                           placeholder='Describe yourself briefly'
                           className='resize-none'
                           rows={4}
                           {...field}
                        />
                     </FormControl>

                     <FormMessage />
                  </FormItem>
               )}
            />
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
