import { isDoctor, useAuth } from '@/features/auth';

import DoctorProfile from '@/app/pages/profile/doctor-profile';
import PatientProfile from '@/app/pages/profile/patient-profile';

export default function ProfilePage() {
   // todo: that should get the profile that its Id or Slug come from the url
   // then pass it to the profile components
   const { currentUser } = useAuth();

   if (isDoctor(currentUser!)) return <DoctorProfile />;

   return <PatientProfile />;
}
