import { Button } from '@/shared/components/ui/button';
import {
   Drawer,
   DrawerClose,
   DrawerContent,
   DrawerDescription,
   DrawerFooter,
   DrawerHeader,
   DrawerTitle,
   DrawerTrigger,
} from '@/shared/components/ui/drawer';
import { TimeSlot } from '@/shared/types/doctor';

import TimeSlotForm from '@/features/doctor/components/form/time-slot-form';

type TimeSlotDrawerProps = {
   open: boolean;
   setOpen: (open: boolean) => void;
   children: React.ReactNode;
   onSubmit: (data: TimeSlot) => void;
   initialValues?: TimeSlot;
   event: 'add' | 'edit';
};

export default function TimeSlotDrawer({
   open,
   setOpen,
   children,
   onSubmit,
   initialValues,
   event,
}: TimeSlotDrawerProps) {
   const verb = event === 'edit' ? 'Editing' : 'Adding';

   return (
      <Drawer open={open} onOpenChange={setOpen}>
         <DrawerTrigger asChild>{children}</DrawerTrigger>

         <DrawerContent>
            <DrawerHeader className='sr-only'>
               <DrawerTitle>{verb} a Time Slot</DrawerTitle>
               <DrawerDescription>
                  This a form for {verb} a Time Slot
               </DrawerDescription>
            </DrawerHeader>

            <div className='px-4 pt-6'>
               <TimeSlotForm
                  onSubmit={onSubmit}
                  initialValues={initialValues}
                  setOpen={setOpen}
               />
            </div>

            <DrawerFooter className='pb-6'>
               <DrawerClose asChild>
                  <Button variant='outline'>Cancel</Button>
               </DrawerClose>
            </DrawerFooter>
         </DrawerContent>
      </Drawer>
   );
}
