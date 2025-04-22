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
   className?: string;
};

export const MobileFilter = ({
   specialties,

   className,
}: MobileFilterProps) => {
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
