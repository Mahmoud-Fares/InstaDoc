import { Doctor } from './doctor';
import { Patient } from './patient';

export { type Doctor } from './doctor';
export { type Patient } from './patient';
export { type User, type UserRole } from './user';

export type AuthUser = Patient | Doctor;
