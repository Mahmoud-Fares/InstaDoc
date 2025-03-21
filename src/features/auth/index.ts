export { useAuth } from '@/features/auth/hooks/use-auth';
export type { AuthUser } from '@/features/auth/store/auth-store';
export { getUserBySlug, isDoctor, isPatient } from '@/features/auth/utils';

export { SignedIn } from '@/features/auth/components/view-control/signed-in';
export { SignedOut } from '@/features/auth/components/view-control/signed-out';
export { ViewOnlyTo } from '@/features/auth/components/view-control/view-only-to';
export { ViewToCurrentUser } from '@/features/auth/components/view-control/view-to-current-user';
