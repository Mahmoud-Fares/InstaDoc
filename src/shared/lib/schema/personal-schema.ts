import * as z from 'zod';

import {
   dateValidation,
   emailValidation,
   phoneValidation,
   stringValidation,
} from '.';

export const personalSchema = z.object({
   fullName: stringValidation(
      4,
      'Full Name must contain at least 4 character(s)'
   ).max(20, 'Full Name must contain at most 20 character(s)'),
   email: emailValidation,
   phone: phoneValidation,
   address: stringValidation(5, 'Address must contain at least 5 character(s)'),
   dateOfBirth: dateValidation,
});
