import AppointmentDoctorCard from '@/features/appointment/components/appointment-card/doctor';
import AppointmentPatientCard from '@/features/appointment/components/appointment-card/patient';
import { Appointment } from '@/features/appointment/types';
import { getCardData } from '@/features/appointment/utils';
import { isDoctor, isPatient, useAuth } from '@/features/auth';

type AppointmentCardProps = {
   appointment: Appointment;
};

/**
 *
 * the current user is a patient >> show the doctor card
 *
 * the current user is a doctor and he is not the doctor of the appointment. (if doctor book an appointment) >> show the patient card
 *
 * the current user is a doctor and he is the doctor of the appointment. >> show the patient card
 *
 */

export default function AppointmentCard({ appointment }: AppointmentCardProps) {
   const { currentUser } = useAuth();

   if (isPatient(currentUser!))
      return <AppointmentPatientCard appointment={getCardData(appointment)} />;

   // the current user is a doctor and he is not the doctor of the appointment. (if doctor book an appointment)
   if (isDoctor(currentUser!) && currentUser.id === appointment.patientId)
      return <AppointmentPatientCard appointment={getCardData(appointment)} />;

   // the current user is a doctor and he is the doctor of the appointment.
   return <AppointmentDoctorCard appointment={getCardData(appointment)} />;
}
