import * as z from 'zod';

import { loginSchema, registerSchema } from '@/features/auth/schema';

export type { AuthState } from '@/features/auth/types/store';

export type LoginCredentialsType = z.infer<typeof loginSchema>;

export type RegisterCredentialsType = z.infer<typeof registerSchema>;
