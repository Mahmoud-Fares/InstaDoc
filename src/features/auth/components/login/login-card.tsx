import {
   Card,
   CardContent,
   CardDescription,
   CardHeader,
   CardTitle,
} from '@/shared/components/ui/card';

import { LoginFooter } from '@/features/auth/components/login/login-footer';
import { LoginForm } from '@/features/auth/components/login/login-form';
import { OrSeparator } from '@/features/auth/components/or-separator';
import { SocialAuth } from '@/features/auth/components/social-auth';

export default function LoginCard() {
   return (
      <div className='flex h-full min-h-[50vh] w-full flex-col items-center justify-center'>
         <Card className='w-full'>
            <CardHeader>
               {/* todo: add logo */}
               <CardTitle className='text-2xl'>Login</CardTitle>
               <CardDescription>
                  Enter your email and password to login to your account.
               </CardDescription>
            </CardHeader>

            <CardContent className='space-y-4'>
               <LoginForm />

               <OrSeparator />
               <SocialAuth />

               <LoginFooter />
            </CardContent>
         </Card>
      </div>
   );
}
