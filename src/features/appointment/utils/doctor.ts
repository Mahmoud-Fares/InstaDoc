import { APPOINTMENTS } from '../mock';
import { Appointment } from '../types';

export function getAppointmentsByDoctorId(doctorId: string): Appointment[] {
   return APPOINTMENTS.filter(
      (appointment) => appointment.doctorId === doctorId
   );
}

export function getUpcomingAppointmentsByDoctorId(
   doctorId: string
): Appointment[] {
   const now = new Date();

   return APPOINTMENTS.filter(
      (appointment) =>
         new Date(appointment.date) > now && appointment.doctorId === doctorId
   );
}

export function getPastAppointmentsByDoctorId(doctorId: string): Appointment[] {
   const now = new Date();

   return APPOINTMENTS.filter(
      (appointment) =>
         new Date(appointment.date) < now && appointment.doctorId === doctorId
   );
}
