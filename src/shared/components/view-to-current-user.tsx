import { AuthUser, useAuth } from '@/features/auth';

type ViewToCurrentUserProps = {
   profile: AuthUser;
   children: React.ReactNode;
};

export default function ViewToCurrentUser({
   profile,
   children,
}: ViewToCurrentUserProps) {
   const { currentUser } = useAuth();
   const isCurrentUserProfile = profile.id === currentUser?.id;

   return isCurrentUserProfile && children;
}
