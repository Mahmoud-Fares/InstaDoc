import * as z from 'zod';

import { phoneValidation, stringValidation } from '@/shared/lib/schema';

export const clinicSchema = z.object({
   name: stringValidation(
      4,
      'Clinic Name must contain at least 4 character(s)'
   ),
   address: stringValidation(5, 'Address must contain at least 5 character(s)'),
   phone: phoneValidation,
});
