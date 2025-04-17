import * as z from 'zod';

import { stringValidation } from '@/shared/lib/schema';

export const professionalSettingsSchema = z.object({
   specialties: z.array(stringValidation()).optional(),
   qualifications: z.array(stringValidation()).optional(),
   education: z.array(stringValidation()).optional(),
   experience: z.array(stringValidation()).optional(),
   about: stringValidation(15, 'Describe yourself at least with 15 characters'),
});
