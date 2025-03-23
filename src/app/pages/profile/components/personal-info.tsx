import ProfileAvatar from '@/shared/components/profile-avatar';
import {
   Card,
   CardContent,
   CardDescription,
   CardFooter,
   CardHeader,
   CardTitle,
} from '@/shared/components/ui/card';
import { cn } from '@/shared/lib/utils';
import { AuthUser } from '@/shared/types';

import { ViewToCurrentUser, isDoctor } from '@/features/auth';
import DoctorRating from '@/features/doctor/components/doctor-rating';
import PatientDayOfBirth from '@/features/patient/components/patient-day-of-birth';

import ContactInformation from '@/app/pages/profile/components/contact-info';
import EditProfileButton from '@/app/pages/profile/components/edit-profile-btn';

type PersonalInformationProps = {
   profile: AuthUser;
   className?: string;
};

export default function PersonalInformation({
   profile,
   className,
}: PersonalInformationProps) {
   return (
      <Card className={cn(className)}>
         <CardHeader className='flex flex-row flex-wrap items-center gap-4'>
            <ProfileAvatar profile={profile} />

            <div>
               <CardTitle>{profile.name}</CardTitle>
               <CardDescription>
                  {isDoctor(profile)
                     ? profile.specialties.join(', ')
                     : 'Patient'}
               </CardDescription>
            </div>
         </CardHeader>

         <CardContent className='space-y-4'>
            <ContactInformation profile={profile} />

            {isDoctor(profile) ? (
               <DoctorRating doctor={profile} />
            ) : (
               <PatientDayOfBirth patient={profile} />
            )}
         </CardContent>

         <ViewToCurrentUser profile={profile}>
            <CardFooter>
               <EditProfileButton className='w-full' />
            </CardFooter>
         </ViewToCurrentUser>
      </Card>
   );
}
