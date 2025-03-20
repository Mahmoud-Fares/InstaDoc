import * as React from 'react';

import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';

import { Button } from '@/shared/components/ui/button';
import { Calendar } from '@/shared/components/ui/calendar';
import {
   Popover,
   PopoverContent,
   PopoverTrigger,
} from '@/shared/components/ui/popover';
import { cn } from '@/shared/lib/utils';

export function DatePicker({ initialDate }: { initialDate?: Date }) {
   const [date, setDate] = React.useState<Date | undefined>(initialDate);

   return (
      <Popover>
         <PopoverTrigger asChild>
            <Button
               variant={'outline'}
               className={cn(
                  'w-[280px] justify-start text-left font-normal',
                  !date && 'text-muted-foreground'
               )}
            >
               <CalendarIcon />
               {date ? format(date, 'PPP') : <span>Pick a date</span>}
            </Button>
         </PopoverTrigger>

         <PopoverContent className='w-auto p-0'>
            <Calendar
               mode='single'
               selected={date}
               onSelect={setDate}
               initialFocus
            />
         </PopoverContent>
      </Popover>
   );
}
