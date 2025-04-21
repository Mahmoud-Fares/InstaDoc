import { TimePicker } from '@/shared/components/ui/time-picker';
import { cn } from '@/shared/lib/utils';

import { SlotDetailItemType } from '@/features/doctor/components/settings/availability/time-slot-details';

export default function SlotDetailsItem({
   label,
   value,
   className,
}: SlotDetailItemType & { className?: string }) {
   return (
      <div className={cn('space-y-1', className)}>
         <span>{label}</span>

         {ValueRenderer({
            value,
            className:
               'pointer-events-none flex w-full items-center rounded-md border-2 border-input p-1 px-2',
         })}
      </div>
   );
}

type ValueRendererProps = {
   value: Date | number;
   className: string;
};
const ValueRenderer = ({ value, className }: ValueRendererProps) => {
   if (typeof value === 'number')
      return <span className={className}>{value}</span>;

   return <TimePicker value={value} className={className} />;
};
