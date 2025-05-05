import { create } from 'zustand';

import { APPOINTMENTS } from '@/features/appointment/mock';
import { Appointment } from '@/features/appointment/types';

type AppointmentStore = {
   appointments: Appointment[];

   getUserAppointments: (id: string) => Appointment[];
   getAppointmentById: (id: string) => Appointment | undefined;
   cancelAppointment: (appointmentId: string) => void;
   rescheduleAppointment: (appointmentId: string) => void;
};

export const useAppointmentStore = create<AppointmentStore>((_set, get) => ({
   appointments: APPOINTMENTS,

   getUserAppointments: (id: string) => {
      return get().appointments.filter((appointment) => {
         return appointment.doctorId === id || appointment.patientId === id;
      });
   },

   getAppointmentById: (id: string) => {
      return get().appointments.find((appointment) => appointment.id === id);
   },

   cancelAppointment: (appointmentId: string) => {
      console.log('cancel: ', appointmentId);
   },

   rescheduleAppointment: (appointmentId: string) => {
      console.log('reschedule: ', appointmentId);
   },
}));
