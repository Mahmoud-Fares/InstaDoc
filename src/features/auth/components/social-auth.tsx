import { toast } from 'sonner';

import { Button } from '@/shared/components/ui/button';

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
         Continue with Google
      </Button>
   );
}
