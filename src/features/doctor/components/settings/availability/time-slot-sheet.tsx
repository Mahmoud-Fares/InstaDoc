import {
   Sheet,
   SheetContent,
   SheetDescription,
   SheetHeader,
   SheetTitle,
   SheetTrigger,
} from '@/shared/components/ui/sheet';
import { TimeSlot } from '@/shared/types/doctor';

import TimeSlotForm from '@/features/doctor/components/form/time-slot-form';

type TimeSlotSheetProps = {
   open: boolean;
   setOpen: (open: boolean) => void;
   children: React.ReactNode;
   onSubmit: (data: TimeSlot) => void;
   initialValues?: TimeSlot;
   event: 'add' | 'edit';
};

export default function TimeSlotSheet({
   open,
   setOpen,
   children,
   onSubmit,
   initialValues,
   event,
}: TimeSlotSheetProps) {
   const verb = event === 'edit' ? 'Editing' : 'Adding';

   return (
      <Sheet open={open} onOpenChange={setOpen}>
         <SheetTrigger asChild>{children}</SheetTrigger>

         <SheetContent>
            <SheetHeader className='sr-only'>
               <SheetTitle>{verb} a Time Slot</SheetTitle>
               <SheetDescription>
                  This a form for {verb} a Time Slot
               </SheetDescription>
            </SheetHeader>

            <TimeSlotForm
               onSubmit={onSubmit}
               initialValues={initialValues}
               setOpen={setOpen}
            />
         </SheetContent>
      </Sheet>
   );
}
