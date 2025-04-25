import Container from '@/shared/components/container';
import { cn } from '@/shared/lib/utils';

import {
   ResultHeader,
   ResultList,
   SearchFilter,
} from '@/features/doctor/components/find-doctor';

export default function FindDoctor() {
   return (
      <Container className='py-10'>
         <div className={cn('space-y-6', 'xl:mx-auto xl:w-11/12 2xl:w-4/5')}>
            <h1 className='text-3xl font-bold'>Find a Doctor</h1>

            <ResultGrid />
         </div>
      </Container>
   );
}

const ResultGrid = () => {
   return (
      <div className='grid gap-6 lg:grid-cols-4'>
         <SearchFilter className='sticky top-2 z-40 lg:top-20' />

         <div className='space-y-6 lg:col-span-3'>
            <ResultHeader />

            <ResultList />
         </div>
      </div>
   );
};
