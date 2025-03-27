import { APPOINTMENTS } from '../mock';
import { Appointment } from '../types';

export function getAppointmentsByPatientId(patientId: string): Appointment[] {
   return APPOINTMENTS.filter(
      (appointment) => appointment.patientId === patientId
   );
}

export function getUpcomingAppointmentsByPatientId(
   patientId: string
): Appointment[] {
   const now = new Date();

   return APPOINTMENTS.filter(
      (appointment) =>
         new Date(appointment.date) > now && appointment.patientId === patientId
   );
}

export function getPastAppointmentsByPatientId(
   patientId: string
): Appointment[] {
   const now = new Date();

   return APPOINTMENTS.filter(
      (appointment) =>
         new Date(appointment.date) < now && appointment.patientId === patientId
   );
}

export function getPatientMedicalHistory(patientId: string): Appointment[] {
   const now = new Date();

   return APPOINTMENTS.filter(
      (appointment) =>
         new Date(appointment.date) < now &&
         appointment.patientId === patientId &&
         appointment.status !== 'cancelled'
   );
}
