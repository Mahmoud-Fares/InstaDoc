import { isDoctor } from '@/features/auth';
import { useAuth } from '@/features/auth/hooks/use-auth';

import DoctorSettings from './doctor-settings';
import PatientSettings from './patient-settings';

export default function Settings() {
   const { currentUser } = useAuth();

   if (isDoctor(currentUser!)) return <DoctorSettings />;

   return <PatientSettings />;
}
