type AppointmentStatus =
   | 'pending'
   | 'scheduled'
   | 'rescheduled'
   | 'completed'
   | 'cancelled'
   | 'missed';

type AppointmentType =
   | 'reservation'
   | 'follow-up'
   | 'consultation'
   | 'routine'
   | 'emergency'
   | 'surgery'
   | 'other';

export type Appointment = {
   id: string;
   patientId: string;
   doctorId: string;
   date: string;
   duration: number;
   status: AppointmentStatus;
   type: AppointmentType;
   notes?: string;
   reason: string;
};
