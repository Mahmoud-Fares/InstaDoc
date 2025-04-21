import { cn } from '@/shared/lib/utils';
import { TimeSlot } from '@/shared/types/doctor';

import SlotDetailsItem from '@/features/doctor/components/settings/availability/slot-details-item';
import { convertStringToDate } from '@/features/doctor/utils/schedule';

type TimeSlotDetailsProps = {
   slot: TimeSlot;
   className?: string;
};

export type SlotDetailItemType = {
   label: string;
   value: Date | number;
};

export default function TimeSlotDetails({
   slot,
   className,
}: TimeSlotDetailsProps) {
   const SLOT_DETAILS: SlotDetailItemType[] = [
      { label: 'Start Time', value: convertStringToDate(slot.start) },
      { label: 'End Time', value: convertStringToDate(slot.end) },
      { label: 'Duration', value: slot.duration },
      { label: 'Capacity', value: slot.capacity },
   ];

   return (
      <div
         className={cn(
            'flex flex-col gap-3',
            'sm:grid sm:grid-cols-2 sm:items-center',
            'md:grid-cols-4',
            className
         )}
      >
         {SLOT_DETAILS.map((detail) => (
            <SlotDetailsItem key={detail.label} {...detail} />
         ))}
      </div>
   );
}
