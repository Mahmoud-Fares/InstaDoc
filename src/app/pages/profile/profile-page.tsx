import { type AuthUser, isDoctor, useAuth } from '@/features/auth';

import DoctorProfile from '@/app/pages/profile/doctor-profile';
import PatientProfile from '@/app/pages/profile/patient-profile';

export default function ProfilePage() {
   const { currentUser } = useAuth();

   if (isDoctor(currentUser as AuthUser)) {
      return <DoctorProfile />;
   }

   return <PatientProfile />;
}
