import { OrSeparator } from '@/features/auth/components/or-separator';
import { SignupFooter } from '@/features/auth/components/signup/signup-footer';
import { SignupForm } from '@/features/auth/components/signup/signup-form';
import { SocialAuth } from '@/features/auth/components/social-auth';
import {
   Card,
   CardContent,
   CardDescription,
   CardHeader,
   CardTitle,
} from '@/shared/components/ui/card';

export default function SignupCard() {
   return (
      <div className='flex h-full min-h-[50vh] w-full flex-col items-center justify-center px-4'>
         <Card className='w-full'>
            <CardHeader>
               {/* todo: add logo */}
               <CardTitle className='text-2xl'>Register</CardTitle>
               <CardDescription>
                  Create a new account by filling out the form below.
               </CardDescription>
            </CardHeader>

            <CardContent className='space-y-4'>
               <SignupForm />

               <OrSeparator />
               <SocialAuth />

               <SignupFooter />
            </CardContent>
         </Card>
      </div>
   );
}
