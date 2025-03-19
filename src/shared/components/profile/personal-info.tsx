import ContactInformation from '@/shared/components/profile/contact-info';
import EditProfileButton from '@/shared/components/profile/edit-profile-btn';
import ProfileAvatar from '@/shared/components/profile/profile-avatar';
import {
   Card,
   CardContent,
   CardDescription,
   CardFooter,
   CardHeader,
   CardTitle,
} from '@/shared/components/ui/card';
import { cn } from '@/shared/lib/utils';

import { AuthUser, isDoctor } from '@/features/auth';
import DoctorRating from '@/features/doctor/components/doctor-rating';
import PatientDayOfBirth from '@/features/patient/components/patient-day-of-birth';

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

         <CardFooter>
            <EditProfileButton profile={profile} className='w-full' />
         </CardFooter>
      </Card>
   );
}
