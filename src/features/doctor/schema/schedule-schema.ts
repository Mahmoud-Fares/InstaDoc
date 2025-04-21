import * as z from 'zod';

export const timeSlotFormSchema = z.object({
   start: z.coerce.date(),
   end: z.coerce.date(),
   duration: z.coerce.number().min(30),
   capacity: z.coerce.number().min(1),
   isActive: z.boolean(),
});

export type scheduleSchemaType = z.infer<typeof timeSlotFormSchema>;
