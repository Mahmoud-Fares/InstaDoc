import { useId } from 'react';

import { Label } from '@/shared/components/ui/label';
import { TimePicker } from '@/shared/components/ui/time-picker';

type ScheduleTimeInputProps = {
   label: string;
   date: Date;
   onChange: (date: Date) => void;
};

export default function ScheduleTimeInput({
   label,
   date,
   onChange,
}: ScheduleTimeInputProps) {
   const id = useId();

   return (
      <div className='space-y-1'>
         <Label htmlFor={id}>{label}</Label>
         <TimePicker
            id={id}
            value={date}
            onChange={(date) => onChange(date!)}
            step={5}
            className='w-full'
         />
      </div>
   );
}
