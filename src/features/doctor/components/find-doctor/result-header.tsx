import {
   Card,
   CardDescription,
   CardHeader,
   CardTitle,
} from '@/shared/components/ui/card';

import { useFindDoctor } from '@/features/doctor/hooks/use-find-doctor';

export const ResultHeader = () => {
   const { filteredDoctors } = useFindDoctor();

   return (
      <Card>
         <CardHeader>
            <CardTitle className='text-2xl'>Search Results</CardTitle>
            <CardDescription>
               Found {filteredDoctors.length} doctors matching your criteria
            </CardDescription>
         </CardHeader>
      </Card>
   );
};
