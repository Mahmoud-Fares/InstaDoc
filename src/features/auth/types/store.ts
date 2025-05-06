import { NavigateFunction } from 'react-router-dom';

import { AuthUser } from '@/shared/types';

import { LoginCredentialsType, RegisterCredentialsType } from '.';

type LoginProps = LoginCredentialsType & {
   navigate: NavigateFunction;
};

type RegisterProps = RegisterCredentialsType & {
   navigate: NavigateFunction;
};

export type AuthState = {
   currentUser: Omit<AuthUser, 'password'> | null;
   token: string;
   users: AuthUser[];

   isLoading: boolean;

   register: (registerProps: RegisterProps) => Promise<void>;
   login: ({ email, password, navigate }: LoginProps) => Promise<void>;
   logout: () => Promise<void>;
};
