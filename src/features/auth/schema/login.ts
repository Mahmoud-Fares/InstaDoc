import * as z from 'zod';

import { emailValidation, passwordValidation } from '@/shared/lib/schema';

export const loginSchema = z.object({
   email: emailValidation,
   password: passwordValidation,
});
