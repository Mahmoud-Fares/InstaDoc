import { AuthUser, useAuthStore } from '@/features/auth/store/auth-store';
import { Doctor } from '@/features/doctor';
import { Patient } from '@/features/patient';

// * note: this Omit<AuthUser, 'password'> is used to handle using these functions with the current user
// * in the future may we remove it because the users and the current one both will be the same type (with no password) coming from backend

export function isDoctor(
   user: AuthUser | Omit<AuthUser, 'password'>
): user is Doctor | Omit<Doctor, 'password'> {
   return user.role === 'doctor';
}

export function isPatient(
   user: AuthUser | Omit<AuthUser, 'password'>
): user is Patient | Omit<Patient, 'password'> {
   return user.role === 'patient';
}

export function getUserBySlug(slug: string) {
   const users = useAuthStore.getState().users;

   return users.find((user) => user.slug === slug);
}
