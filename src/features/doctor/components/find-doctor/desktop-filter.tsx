import { Label } from '@/shared/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/shared/components/ui/radio-group';
import { cn } from '@/shared/lib/utils';

type DesktopFilterProps = {
   specialties: { id: string; name: string }[];
   className?: string;
};

export const DesktopFilter = ({
   specialties,
   className,
}: DesktopFilterProps) => {
   const CHECKBOXES = [
      {
         label: 'Specialty',
         options: specialties,
      },
   ];

   return (
      <div className={cn('flex flex-col gap-6 *:space-y-3', className)}>
         {CHECKBOXES.map((checkbox) => (
            <div key={checkbox.label}>
               <Label className='text-lg'>{checkbox.label}</Label>

               <RadioItemsGroup
                  label={checkbox.label}
                  options={checkbox.options}
               />
            </div>
         ))}
      </div>
   );
};

type RadioItemsGroupProps = {
   label: string;
   options: { id: string; name: string }[];
};

const RadioItemsGroup = ({ label, options }: RadioItemsGroupProps) => {
   return (
      <RadioGroup>
         {options.map((option) => (
            <div key={option.id} className='flex items-center space-x-2'>
               <RadioGroupItem value={option.id} id={`${label}-${option.id}`} />

               <Label
                  htmlFor={`${label}-${option.id}`}
                  className='cursor-pointer text-sm'
               >
                  {option.name}
               </Label>
            </div>
         ))}
      </RadioGroup>
   );
};
