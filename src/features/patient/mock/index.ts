import { Patient } from '@/features/patient/types/patient';

export const PATIENTS: Patient[] = [
   {
      id: 'p1',
      email: 'patient@email.com',
      password: 'password',
      name: 'Mary Doe',
      role: 'patient',
      dateOfBirth: '1985-06-15',
      allergies: ['Penicillin', 'Peanuts'],
      medications: ['Lisinopril 10mg', 'Atorvastatin 20mg'],
      conditions: ['Hypertension', 'High Cholesterol'],
      insuranceProvider: 'Blue Cross Blue Shield',
      insuranceNumber: 'BCBS12345678',
      emergencyContact: {
         name: 'Mary Doe',
         relationship: 'Spouse',
         phone: '(555) 234-5678',
      },
   },
   {
      id: 'p2',
      email: 'robert.smith@example.com',
      password: 'password',
      name: 'Robert Smith',
      role: 'patient',
      dateOfBirth: '1990-11-28',
      allergies: ['Sulfa Drugs'],
      medications: ['Levothyroxine 50mcg'],
      conditions: ['Hypothyroidism'],
      insuranceProvider: 'Aetna',
      insuranceNumber: 'AET87654321',
      emergencyContact: {
         name: 'Robert Smith',
         relationship: 'Brother',
         phone: '(555) 876-5432',
      },
   },
];
