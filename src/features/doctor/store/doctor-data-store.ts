import { create } from 'zustand';

import { Doctor } from '@/shared/types';

import { DOCTORS } from '@/features/doctor/mock';

type DoctorDataState = {
   doctors: Doctor[];
};

export const useDoctorDataStore = create<DoctorDataState>(() => ({
   doctors: DOCTORS,
}));
