import { toast } from 'sonner';

import { Button } from '@/shared/components/ui/button';

import GoogleIcon from '@/features/auth/components/google-icon';

export function SocialAuth() {
   return <GoogleLoginButton />;
}

function GoogleLoginButton() {
   return (
      <Button
         variant='outline'
         className='w-full'
         onClick={() => toast.info('Google login clicked')}
      >
         <GoogleIcon />
         <span className='hidden sm:flex'>Continue with Google</span>
      </Button>
   );
}
