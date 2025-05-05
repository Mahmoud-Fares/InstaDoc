import { Doctor, Patient } from '@/shared/types';

import { Appointment, AppointmentForCard } from '@/features/appointment/types';
import { getUserById } from '@/features/auth';

export * from './booking';
export * from './doctor';
export * from './patient';

export function getCardData(appointment: Appointment): AppointmentForCard {
   const patient = getUserById(appointment.patientId) as Patient;
   const doctor = getUserById(appointment.doctorId) as Doctor;

   if (!patient || !doctor) throw new Error('User not found');

   return {
      ...appointment,
      patient,
      doctor,
   };
}
