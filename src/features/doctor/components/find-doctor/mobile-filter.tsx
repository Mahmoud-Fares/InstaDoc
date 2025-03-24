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

type MobileFilterProps = {
   specialties: { id: string; name: string }[];
   availability: { id: string; name: string }[];
   className?: string;
};

export const MobileFilter = ({
   specialties,
   availability,
   className,
}: MobileFilterProps) => {
   const SELECTS = [
      {
         label: 'Specialty',
         options: specialties,
         placeholder: 'Select a specialty',
      },
      {
         label: 'Availability',
         options: availability,
         placeholder: 'Select a availability',
      },
   ];

   return (
      <div className={cn('grid grid-cols-2 gap-6 *:space-y-3', className)}>
         {SELECTS.map((select) => (
            <div key={select.label}>
               <Label>{select.label}</Label>

               <Select>
                  <SelectTrigger className='gap-4'>
                     <SelectValue placeholder={select.placeholder} />
                  </SelectTrigger>

                  <SelectContent>
                     <SelectGroup>
                        {select.options.map((option) => (
                           <SelectItem key={option.id} value={option.id}>
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
