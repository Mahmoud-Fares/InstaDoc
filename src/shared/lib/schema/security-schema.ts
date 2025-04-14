import { z } from 'zod';

import { passwordValidation, stringValidation } from '.';

export const securitySchema = z
   .object({
      currentPassword: stringValidation(
         1,
         'Current password is required when changing password'
      ),
      newPassword: stringValidation()
         .optional()
         .transform((val) => (val === '' ? undefined : val))
         .pipe(passwordValidation.optional()),
      confirmPassword: stringValidation().optional(),
   })
   .refine(
      (data) => !data.newPassword || data.newPassword === data.confirmPassword,
      {
         message: 'Passwords do not match',
         path: ['confirmPassword'],
      }
   )
   .refine(
      (data) => !data.newPassword || data.newPassword !== data.currentPassword,
      {
         message: 'New password is the same as the current password',
         path: ['newPassword'],
      }
   );
