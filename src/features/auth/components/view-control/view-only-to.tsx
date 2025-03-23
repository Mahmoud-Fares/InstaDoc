import { ReactNode } from 'react';

import { UserRole } from '@/shared/types';

import { useAuth } from '@/features/auth';

type ViewOnlyToProps = {
   allowedRoles: UserRole[];
   children: ReactNode;
   fallback?: ReactNode;
};

export const ViewOnlyTo = ({
   allowedRoles,
   children,
   fallback = null,
}: ViewOnlyToProps) => {
   const { currentUser } = useAuth();

   if (!currentUser) return fallback;

   const hasPermission = allowedRoles.includes(currentUser.role);

   return hasPermission ? <>{children}</> : <>{fallback}</>;
};
