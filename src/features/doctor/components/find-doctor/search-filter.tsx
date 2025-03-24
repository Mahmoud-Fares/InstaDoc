import { Button } from '@/shared/components/ui/button';
import {
   Card,
   CardContent,
   CardHeader,
   CardTitle,
} from '@/shared/components/ui/card';
import { Input } from '@/shared/components/ui/input';
import { Label } from '@/shared/components/ui/label';
import { cn } from '@/shared/lib/utils';

import { DesktopFilter } from './desktop-filter';
import { MobileFilter } from './mobile-filter';

type SearchFilterProps = {
   className?: string;
};

const SPECIALTIES = [
   { id: '1', name: 'Cardiology' },
   { id: '2', name: 'Dermatology' },
   { id: '3', name: 'Pediatrics' },
   { id: '4', name: 'Neurology' },
   { id: '5', name: 'Orthopedics' },
   { id: '6', name: 'Gynecology' },
   { id: '7', name: 'Urology' },
   { id: '8', name: 'Pediatrics' },
];

const AVAILABILITY = [
   { id: '1', name: 'Available Today' },
   { id: '2', name: 'Available This Week' },
   { id: '3', name: 'Virtual Visits' },
];

export const SearchFilter = ({ className }: SearchFilterProps) => {
   return (
      <Card className={cn('top-20 h-fit lg:sticky', className)}>
         <CardHeader className='pb-4 text-xl'>
            <CardTitle>Filters</CardTitle>
         </CardHeader>

         <CardContent>
            <div className='space-y-6'>
               <div>
                  <Label htmlFor='search' className='text-lg'>
                     Search
                  </Label>
                  <Input
                     id='search'
                     placeholder='Search by name or specialty'
                     className='pt-1'
                  />
               </div>

               <MobileFilter
                  specialties={SPECIALTIES}
                  availability={AVAILABILITY}
                  className='lg:hidden'
               />

               <DesktopFilter
                  specialties={SPECIALTIES}
                  availability={AVAILABILITY}
                  className='hidden lg:flex'
               />

               <Button variant='outline' className='w-full'>
                  Clear All Filters
               </Button>
            </div>
         </CardContent>
      </Card>
   );
};
