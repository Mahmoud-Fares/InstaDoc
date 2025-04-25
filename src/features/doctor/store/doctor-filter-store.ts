import { create } from 'zustand';

type DoctorFilterState = {
   name: string;
   filter: string;

   setName: (name: string) => void;
   setFilter: (filter: string) => void;
};

export const useDoctorFilterStore = create<DoctorFilterState>((set) => ({
   name: '',
   filter: '',

   setName: (name: string) => {
      set({ name });
   },

   setFilter: (filter: string) => {
      set({ filter });
   },
}));
