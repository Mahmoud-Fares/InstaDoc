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
   { id: '0', name: 'None' },
   { id: '1', name: 'Cardiology' },
   { id: '2', name: 'Dermatology' },
   { id: '3', name: 'Pediatrics' },
   { id: '4', name: 'Neurology' },
   { id: '5', name: 'Orthopedics' },
   { id: '6', name: 'Gynecology' },
   { id: '7', name: 'Urology' },
   { id: '8', name: 'Pediatrics' },
];

export const SearchFilter = ({ className }: SearchFilterProps) => {
   return (
      <Card
         className={cn(
            'h-fit bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60',
            className
         )}
      >
         <CardHeader className='sr-only pb-4 text-xl'>
            <CardTitle>Filters</CardTitle>
         </CardHeader>

         <CardContent className='pt-6'>
            <div className='grid grid-cols-2 items-center gap-6 sm:grid-cols-[1fr_auto] lg:grid-cols-1 lg:items-start'>
               <div className='flex-1 space-y-3'>
                  <Label htmlFor='search' className='text-lg'>
                     Search
                  </Label>
                  <Input id='search' placeholder='Search by name' />
               </div>

               <MobileFilter specialties={SPECIALTIES} className='lg:hidden' />

               <DesktopFilter
                  specialties={SPECIALTIES}
                  className='hidden lg:flex'
               />
            </div>
         </CardContent>
      </Card>
   );
};
