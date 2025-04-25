import EmptyState from '@/shared/components/empty-state';
import { Button } from '@/shared/components/ui/button';
import { Card, CardContent } from '@/shared/components/ui/card';

import { useFindDoctor } from '@/features/doctor/hooks/use-find-doctor';

export const EmptyResult = () => {
   const { clearFilters } = useFindDoctor();

   return (
      <Card>
         <CardContent className='flex flex-col items-center justify-center gap-3 p-6'>
            <EmptyState message='No doctors found matching your criteria' />

            <Button variant='outline' onClick={clearFilters}>
               Clear Filters
            </Button>
         </CardContent>
      </Card>
   );
};
