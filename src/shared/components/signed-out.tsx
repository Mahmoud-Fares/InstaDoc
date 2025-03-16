import { ReactNode } from 'react';

import { useAuth } from '@/features/auth';

type SignedOutProps = {
   children: ReactNode;
};

export default function SignedOut({ children }: SignedOutProps) {
   const { currentUser } = useAuth();

   return !currentUser && <>{children}</>;
}
