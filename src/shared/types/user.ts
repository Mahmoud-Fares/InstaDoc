export type UserRole = 'patient' | 'doctor';

export type User = {
   id: string;
   name: string;
   slug: string;
   email: string;
   password: string;
   avatar?: string; // missing
   dateOfBirth: string;
   gender?: string;
   role: UserRole;
   phone?: string;
   governorate?: string; // what is the difference between governorate and address? (get doc info api call) and make it just address field instead of governorate
   bio?: string; // missing in the patient
};
