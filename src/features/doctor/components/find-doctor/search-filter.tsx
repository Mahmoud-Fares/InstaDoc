import { Button } from '@/shared/components/ui/button';
import {
   Card,
   CardContent,
   CardHeader,
   CardTitle,
} from '@/shared/components/ui/card';
import { Checkbox } from '@/shared/components/ui/checkbox';
import { Input } from '@/shared/components/ui/input';
import { Label } from '@/shared/components/ui/label';
import { cn } from '@/shared/lib/utils';

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
   { id: '9', name: 'Pediatrics' },
   { id: '10', name: 'Pediatrics' },
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
                  <Label htmlFor='search'>Search</Label>
                  <Input
                     id='search'
                     placeholder='Search by name or specialty'
                     className='pt-1'
                  />
               </div>

               <div>
                  <Label className='block pb-3'>Specialty</Label>
                  <div className='space-y-2'>
                     {SPECIALTIES.map((specialty) => (
                        <div
                           key={specialty.id}
                           className='flex items-center gap-2'
                        >
                           <Checkbox id={`specialty-${specialty.id}`} />
                           <Label
                              htmlFor={`specialty-${specialty.id}`}
                              className='cursor-pointer text-sm'
                           >
                              {specialty.name}
                           </Label>
                        </div>
                     ))}
                  </div>
               </div>

               <div>
                  <Label className='block pb-3'>Availability</Label>
                  <div className='space-y-2'>
                     {AVAILABILITY.map((availability) => (
                        <div
                           key={availability.id}
                           className='flex items-center gap-2'
                        >
                           <Checkbox id={`availability-${availability.id}`} />
                           <Label
                              htmlFor={`availability-${availability.id}`}
                              className='cursor-pointer text-sm'
                           >
                              {availability.name}
                           </Label>
                        </div>
                     ))}
                  </div>
               </div>

               <Button variant='outline' className='w-full'>
                  Clear All Filters
               </Button>
            </div>
         </CardContent>
      </Card>
   );
};
