import { useState } from 'react';

import * as z from 'zod';

import { useMediaQuery } from '@/shared/hooks/use-media-query';

import TimeSlotDrawer from '@/features/doctor/components/settings/availability/time-slot-drawer';
import TimeSlotSheet from '@/features/doctor/components/settings/availability/time-slot-sheet';
import { timeSlotFormSchema } from '@/features/doctor/schema/schedule-schema';

type TimeSlotSheetDrawerProps = EditSheetDrawerProps | AddSheetDrawerProps;

type AddSheetDrawerProps = SharedTypes & { event: 'add' };
type EditSheetDrawerProps = SharedTypes & {
   initialValues: z.infer<typeof timeSlotFormSchema>;
   event: 'edit';
};

type SharedTypes = {
   onSubmit: (values: z.infer<typeof timeSlotFormSchema>) => void;
   children: React.ReactNode;
};

export default function TimeSlotSheetDrawer(props: TimeSlotSheetDrawerProps) {
   const [isOpen, setIsOpen] = useState<boolean>(false);
   const isDesktop = useMediaQuery('(min-width: 768px)');

   const initialValues =
      props.event === 'edit' ? props.initialValues : undefined;

   if (isDesktop)
      return (
         <TimeSlotSheet
            open={isOpen}
            setOpen={setIsOpen}
            onSubmit={props.onSubmit}
            initialValues={initialValues}
            event={props.event}
         >
            {props.children}
         </TimeSlotSheet>
      );

   return (
      <TimeSlotDrawer
         open={isOpen}
         setOpen={setIsOpen}
         onSubmit={props.onSubmit}
         initialValues={initialValues}
         event={props.event}
      >
         {props.children}
      </TimeSlotDrawer>
   );
}
