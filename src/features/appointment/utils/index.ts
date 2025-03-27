import { APPOINTMENTS } from '../mock';
import { Appointment } from '../types';

export * from './booking';
export * from './doctor';
export * from './patient';

export function getAppointmentById(id: string): Appointment | undefined {
   return APPOINTMENTS.find((appointment) => appointment.id === id);
}
