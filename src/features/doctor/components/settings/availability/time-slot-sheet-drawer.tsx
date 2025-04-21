import { useState } from 'react';

import * as z from 'zod';

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
import {
   Sheet,
   SheetContent,
   SheetDescription,
   SheetHeader,
   SheetTitle,
   SheetTrigger,
} from '@/shared/components/ui/sheet';
import { useMediaQuery } from '@/shared/hooks/use-media-query';

import TimeSlotForm from '@/features/doctor/components/form/time-slot-form';
import { timeSlotFormSchema } from '@/features/doctor/schema/schedule-schema';

type TimeSlotSheetDrawerProps = EditSheetDrawerProps | AddSheetDrawerProps;

type EditSheetDrawerProps = SharedTypes & {
   initialValues: z.infer<typeof timeSlotFormSchema>;
   event: 'edit';
};
type AddSheetDrawerProps = SharedTypes & { event: 'add' };

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

type SheetDrawerProps = {
   open: boolean;
   setOpen: (open: boolean) => void;
   children: React.ReactNode;
   onSubmit: (data: z.infer<typeof timeSlotFormSchema>) => void;
   initialValues?: z.infer<typeof timeSlotFormSchema>;
   event: 'add' | 'edit';
};

function TimeSlotSheet({
   open,
   setOpen,
   children,
   onSubmit,
   initialValues,
   event,
}: SheetDrawerProps) {
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

function TimeSlotDrawer({
   open,
   setOpen,
   children,
   onSubmit,
   initialValues,
   event,
}: SheetDrawerProps) {
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
