import { Doctor } from '@/shared/types';

export const DOCTORS: Doctor[] = [
   {
      id: 'dr1',
      email: 'doctor@email.com',
      password: 'password',
      name: 'Dr. Williams',
      slug: 'dr-williams',
      phone: '+201234567890',
      role: 'doctor',
      dateOfBirth: '1970-03-10',
      specialties: ['Cardiology', 'Internal Medicine'],
      qualifications: ['MD', 'FACC'],
      education: [
         'Harvard Medical School',
         'Residency at Massachusetts General Hospital',
      ],
      experience: [
         '10+ years in cardiology practice',
         'Chief of Cardiology at City Hospital (2018-2020)',
      ],
      bio: 'Dr. Williams is a board-certified cardiologist specializing in preventive cardiology and heart disease management.',
      clinicInfo: {
         name: 'Heart Health Associates',
         address: '123 Medical Pkwy, Boston, MA 02215',
         phone: '+201234567890',
      },
      fees: 100,
      averageRating: 4.8,
      reviewCount: 124,
      schedule: {
         monday: [
            { start: '09:00', end: '12:00' },
            { start: '13:00', end: '17:00' },
         ],
         tuesday: [
            { start: '09:00', end: '12:00' },
            { start: '13:00', end: '17:00' },
         ],
         wednesday: [{ start: '09:00', end: '12:00' }],
         thursday: [
            { start: '09:00', end: '12:00' },
            { start: '13:00', end: '17:00' },
         ],
         friday: [
            { start: '09:00', end: '12:00' },
            { start: '13:00', end: '16:00' },
         ],
         saturday: [],
         sunday: [],
      },
   },
   {
      id: 'dr2',
      email: 'dr.johnson@example.com',
      password: 'password',
      name: 'Dr. Johnson',
      slug: 'dr-johnson',
      phone: '(555) 456-7890',
      role: 'doctor',
      dateOfBirth: '1975-07-15',
      specialties: ['Family Medicine', 'Pediatrics'],
      qualifications: ['MD', 'FAAFP'],
      education: [
         'Johns Hopkins University School of Medicine',
         'Residency at Johns Hopkins Hospital',
      ],
      experience: [
         '15+ years in family medicine',
         'Family physician at Community Health Center (2010-Present)',
      ],
      bio: 'Dr. Johnson is a compassionate family physician dedicated to providing comprehensive care for patients of all ages.',
      clinicInfo: {
         name: 'Family Care Medical Group',
         address: '456 Wellness Ave, Baltimore, MD 21287',
         phone: '(555) 456-7890',
      },
      fees: 200,
      averageRating: 4.9,
      reviewCount: 203,
      schedule: {
         monday: [
            { start: '08:00', end: '12:00' },
            { start: '13:00', end: '18:00' },
         ],
         tuesday: [
            { start: '08:00', end: '12:00' },
            { start: '13:00', end: '18:00' },
         ],
         wednesday: [
            { start: '08:00', end: '12:00' },
            { start: '13:00', end: '18:00' },
         ],
         thursday: [{ start: '08:00', end: '12:00' }],
         friday: [
            { start: '08:00', end: '12:00' },
            { start: '13:00', end: '18:00' },
         ],
         saturday: [{ start: '09:00', end: '13:00' }],
         sunday: [],
      },
   },
   {
      id: 'dr3',
      email: 'dr.patel@example.com',
      password: 'password',
      name: 'Dr. Patel',
      slug: 'dr-patel',
      phone: '(555) 567-8901',
      role: 'doctor',
      dateOfBirth: '1980-05-20',
      specialties: ['Neurology'],
      qualifications: ['MD', 'PhD', 'FAAN'],
      education: [
         'Stanford University School of Medicine',
         'Neurology Residency at UCSF Medical Center',
      ],
      experience: [
         '12+ years specializing in neurodegenerative disorders',
         'Director of Neurology Research at University Hospital (2015-Present)',
      ],
      bio: 'Dr. Patel is a neurologist specializing in the diagnosis and treatment of complex neurological disorders and neurodegenerative diseases.',
      clinicInfo: {
         name: 'Advanced Neurology Center',
         address: '789 Brain Way, San Francisco, CA 94143',
         phone: '(555) 567-8901',
      },
      fees: 300,
      averageRating: 4.7,
      reviewCount: 98,
      schedule: {
         monday: [
            { start: '10:00', end: '13:00' },
            { start: '14:00', end: '19:00' },
         ],
         tuesday: [
            { start: '10:00', end: '13:00' },
            { start: '14:00', end: '19:00' },
         ],
         wednesday: [],
         thursday: [
            { start: '10:00', end: '13:00' },
            { start: '14:00', end: '19:00' },
         ],
         friday: [
            { start: '10:00', end: '13:00' },
            { start: '14:00', end: '19:00' },
         ],
         saturday: [],
         sunday: [],
      },
   },
];
