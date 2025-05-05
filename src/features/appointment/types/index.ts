import { Doctor, Patient } from '@/shared/types';

type AppointmentStatus =
   | 'pending'
   | 'scheduled'
   | 'rescheduled'
   | 'served'
   | 'cancelled'
   | 'missed';

type AppointmentType = 'virtual' | 'in-person';

export type Appointment = {
   id: string;
   patientId: string;
   doctorId: string;
   startTime: string;
   endTime: string;
   date: string;
   duration: number;
   status: AppointmentStatus;
   type: AppointmentType;
   notes?: string;
   reason: string;
};

export type AppointmentWithDoctor = Appointment & {
   doctor: Doctor;
};

export type AppointmentWithPatient = Appointment & {
   patient: Patient;
};

export type AppointmentForCard = AppointmentWithDoctor & AppointmentWithPatient;
