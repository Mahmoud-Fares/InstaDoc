import { Checkbox } from '@/shared/components/ui/checkbox';
import { Label } from '@/shared/components/ui/label';
import { cn } from '@/shared/lib/utils';

type DesktopFilterProps = {
   specialties: { id: string; name: string }[];
   availability: { id: string; name: string }[];
   className?: string;
};

export const DesktopFilter = ({
   specialties,
   availability,
   className,
}: DesktopFilterProps) => {
   const CHECKBOXES = [
      {
         label: 'Specialty',
         options: specialties,
      },
      {
         label: 'Availability',
         options: availability,
      },
   ];

   return (
      <div className={cn('flex flex-col gap-6 *:space-y-3', className)}>
         {CHECKBOXES.map((checkbox) => (
            <div key={checkbox.label}>
               <Label className='text-lg'>{checkbox.label}</Label>

               <CheckboxGroup
                  label={checkbox.label}
                  options={checkbox.options}
               />
            </div>
         ))}
      </div>
   );
};

type CheckboxGroupProps = {
   label: string;
   options: { id: string; name: string }[];
};

const CheckboxGroup = ({ label, options }: CheckboxGroupProps) => (
   <div className='space-y-2'>
      {options.map((option) => (
         <div key={option.id} className='flex items-center gap-2'>
            <Checkbox id={`${label}-${option.id}`} />

            <Label
               htmlFor={`${label}-${option.id}`}
               className='cursor-pointer text-sm'
            >
               {option.name}
            </Label>
         </div>
      ))}
   </div>
);
