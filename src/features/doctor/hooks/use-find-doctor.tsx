import { useEffect } from 'react';

import { useSearchParams } from 'react-router-dom';
import { useDebounce } from 'use-debounce';

import { useDoctorDataStore } from '@/features/doctor/store/doctor-data-store';
import { useDoctorFilterStore } from '@/features/doctor/store/doctor-filter-store';

export const useFindDoctor = () => {
   const [searchParams, setSearchParams] = useSearchParams();

   const doctors = useDoctorDataStore((s) => s.doctors);

   const name = useDoctorFilterStore((s) => s.name);
   const [debouncedName] = useDebounce(name, 400);
   const setName = useDoctorFilterStore((s) => s.setName);

   const filter = useDoctorFilterStore((s) => s.filter);
   const setFilter = useDoctorFilterStore((s) => s.setFilter);
   const [debouncedFilter] = useDebounce(filter, 400);

   // Load from URL on mount
   useEffect(() => {
      setName(searchParams.get('name') || '');
      setFilter(searchParams.get('filter') || '');
   }, [searchParams, setName, setFilter]);

   // Handlers to update store + URL
   const updateName = (name: string) => {
      setName(name);
      searchParams.set('name', name);
      setSearchParams(searchParams);
   };

   const updateFilter = (filter: string) => {
      setFilter(filter);
      searchParams.set('filter', filter);
      setSearchParams(searchParams);
   };

   const clearFilters = () => {
      setName('');
      setFilter('');
      searchParams.delete('name');
      searchParams.delete('filter');
      setSearchParams(searchParams);
   };

   const filteredDoctors = doctors.filter((doc) => {
      if (!debouncedName && !debouncedFilter) return true;

      const matchesName = doc.name
         .toLowerCase()
         .includes(debouncedName.toLowerCase());

      const matchesFilter =
         debouncedFilter === 'None' ||
         doc.specialties
            .map((s) => s.toLowerCase())
            .includes(debouncedFilter.toLowerCase());

      return matchesName && matchesFilter;
   });

   return {
      name,
      updateName,

      filter,
      updateFilter,

      clearFilters,
      filteredDoctors,
   };
};
