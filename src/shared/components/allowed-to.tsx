import { ReactNode } from 'react';

import { UserRole } from '@/shared/types/user';

import { useAuth } from '@/features/auth';

type AllowedToProps = {
   allowedRoles: UserRole[];
   children: ReactNode;
   fallback?: ReactNode;
};

export const AllowedTo = ({
   allowedRoles,
   children,
   fallback = null,
}: AllowedToProps) => {
   const { currentUser } = useAuth();

   if (!currentUser) return fallback;

   const hasPermission = allowedRoles.includes(currentUser.role);

   return hasPermission ? <>{children}</> : <>{fallback}</>;
};
