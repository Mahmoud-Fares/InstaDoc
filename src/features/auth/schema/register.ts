import * as z from 'zod';

import {
   emailValidation,
   genderValidation,
   passwordValidation,
   phoneValidation,
   roleValidation,
   stringValidation,
} from '@/shared/lib/schema';

export const registerSchema = z
   .object({
      name: stringValidation(2, 'Name must be at least 2 characters long'),
      email: emailValidation,
      password: passwordValidation,
      confirmPassword: z.string(),
      phone: phoneValidation,
      gender: genderValidation,
      role: roleValidation,
   })
   .refine((data) => data.password === data.confirmPassword, {
      path: ['confirmPassword'],
      message: 'Passwords do not match',
   });
