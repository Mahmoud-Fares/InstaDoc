import * as z from 'zod';

import { phoneValidation, stringValidation } from '@/shared/lib/schema';

export const emergencySchema = z.object({
   contactName: stringValidation(
      4,
      'Contact Name must contain at least 4 character(s)'
   ).max(20, 'Contact Name must contain at most 20 character(s)'),
   relationship: stringValidation(
      5,
      'Relationship must contain at least 5 character(s)'
   ),
   phone: phoneValidation,
});
