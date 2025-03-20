import { useAuth } from '@/features/auth/hooks/use-auth';

import DoctorSettings from './doctor-settings';
import PatientSettings from './patient-settings';

export default function Settings() {
   const { isDoctor } = useAuth();

   if (isDoctor) return <DoctorSettings />;

   return <PatientSettings />;
}
