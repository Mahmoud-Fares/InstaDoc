import { Label } from '@/shared/components/ui/label';
import {
   Select,
   SelectContent,
   SelectGroup,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from '@/shared/components/ui/select';
import { cn } from '@/shared/lib/utils';

import { useFindDoctor } from '@/features/doctor/hooks/use-find-doctor';

type MobileFilterProps = {
   specialties: { id: string; name: string }[];
   className?: string;
};

export const MobileFilter = ({ specialties, className }: MobileFilterProps) => {
   const { filter, updateFilter } = useFindDoctor();

   const SELECTS = [
      {
         label: 'Specialty',
         options: specialties,
         placeholder: 'Select a specialty',
      },
   ];

   return (
      <div className={cn('*:space-y-3', className)}>
         {SELECTS.map((select) => (
            <div key={select.label}>
               <Label>{select.label}</Label>

               <Select value={filter} onValueChange={updateFilter}>
                  <SelectTrigger className='gap-4'>
                     <SelectValue placeholder={select.placeholder} />
                  </SelectTrigger>

                  <SelectContent>
                     <SelectGroup>
                        {select.options.map((option) => (
                           <SelectItem key={option.id} value={option.name}>
                              {option.name}
                           </SelectItem>
                        ))}
                     </SelectGroup>
                  </SelectContent>
               </Select>
            </div>
         ))}
      </div>
   );
};
