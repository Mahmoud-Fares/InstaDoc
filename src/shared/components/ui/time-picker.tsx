import React, { forwardRef, useCallback } from 'react';

import { type Options, useTimescape } from 'timescape/react';

import { Input } from '@/shared/components/ui/input';
import { cn } from '@/shared/lib/utils';

// @source: https://github.com/dan-lee/timescape?tab=readme-ov-file

const timePickerInputBase =
   'p-1 inline tabular-nums h-fit border-none outline-none select-none content-box caret-transparent rounded-sm min-w-8 text-center focus:bg-foreground/20 focus-visible:ring-0 focus-visible:outline-none';
const timePickerSeparatorBase = 'text-xs text-gray-400';

type TimeFormat = 'hours' | 'minutes' | 'seconds' | 'am/pm';

type TimeFormatDefaults = TimeFormat[];

const DEFAULTS = ['hours', 'minutes', 'am/pm'] as TimeFormatDefaults;

type TimescapeReturn = ReturnType<typeof useTimescape>;
type InputPlaceholders = Record<TimeFormat, string>;
const INPUT_PLACEHOLDERS: InputPlaceholders = {
   hours: 'HH',
   minutes: 'MM',
   seconds: 'SS',
   'am/pm': 'AM/PM',
};

/**
 * Date time picker Docs: {@link: https://shadcn-extension.vercel.app/docs/otp-input}
 */

const TimeGrid = forwardRef<
   HTMLDivElement,
   {
      id?: string;
      format: TimeFormatDefaults;
      className?: string;
      timescape: Pick<TimescapeReturn, 'getRootProps' | 'getInputProps'>;
      placeholders: InputPlaceholders;
      step?: number;
   }
>(
   (
      {
         format,
         className,
         timescape,
         placeholders,
         step,
         id,
      }: {
         format: TimeFormatDefaults;
         className?: string;
         timescape: Pick<TimescapeReturn, 'getRootProps' | 'getInputProps'>;
         placeholders: InputPlaceholders;
         step?: number;
         id?: string;
      },
      ref
   ) => {
      return (
         <div
            className={cn(
               'flex w-fit items-center border-2 p-1',
               className,
               'gap-1 rounded-md border-input selection:bg-transparent selection:text-foreground'
            )}
            {...timescape.getRootProps()}
            ref={ref}
         >
            {format.map((unit, j) => (
               <React.Fragment key={unit}>
                  <Input
                     className={cn(timePickerInputBase, 'min-w-8', {
                        'bg-foreground/15': unit === 'am/pm',
                     })}
                     {...timescape.getInputProps(unit)}
                     placeholder={placeholders[unit]}
                     step={unit === 'minutes' ? step : 1}
                     id={id}
                  />

                  {j < format.length - 2 && (
                     <span className={timePickerSeparatorBase}>:</span>
                  )}
               </React.Fragment>
            ))}
         </div>
      );
   }
);

TimeGrid.displayName = 'TimeGrid';

interface TimeInput {
   value?: Date;
   step?: number;
   id?: string;
   format?: TimeFormatDefaults;
   placeholders?: InputPlaceholders;
   onChange?: Options['onChangeDate'];
   dtOptions?: Options;
   className?: string;
}

const DEFAULT_TS_OPTIONS = {
   date: new Date(),
   hour12: true,
};
export const TimePicker = forwardRef<HTMLDivElement, TimeInput>(
   (
      {
         value,
         step = 1,
         id,
         format = DEFAULTS,
         placeholders,
         dtOptions = DEFAULT_TS_OPTIONS,
         onChange,
         className,
      },
      ref
   ) => {
      const handleDateChange = useCallback(
         (nextDate: Date | undefined) => {
            onChange ? onChange(nextDate) : console.log(nextDate);
         },
         [onChange]
      );
      const timescape = useTimescape({
         ...dtOptions,
         ...(value && { date: value }),
         onChangeDate: handleDateChange,
      });
      return (
         <TimeGrid
            id={id}
            ref={ref}
            format={format}
            timescape={timescape}
            placeholders={placeholders ?? INPUT_PLACEHOLDERS}
            step={step}
            className={className}
         />
      );
   }
);

TimePicker.displayName = 'TimePicker';
