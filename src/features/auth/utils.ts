import { AuthUser } from '@/features/auth/store/auth-store';
import { Doctor } from '@/features/doctor';
import { Patient } from '@/features/patient';

export function isDoctor(user: AuthUser): user is Doctor {
   return user.role === 'doctor';
}

export function isPatient(user: AuthUser): user is Patient {
   return user.role === 'patient';
}
