import { MapPin } from 'lucide-react';

import {
   Card,
   CardContent,
   CardFooter,
   CardHeader,
   CardTitle,
} from '@/shared/components/ui/card';

import UpdateClinicButton from '@/features/doctor/components/buttons/update-clinic-btn';
import ClinicInfoDetails from '@/features/doctor/components/profile/clinic/clinic-info-details';
import { Doctor } from '@/features/doctor/types/doctor';

type ClinicInformationProps = {
   doctor: Doctor;
};

export default function ClinicInformation({ doctor }: ClinicInformationProps) {
   return (
      <Card>
         <CardHeader>
            <CardTitle className='flex items-center'>
               <MapPin className='mr-2 h-5 w-5' />
               Clinic Information
            </CardTitle>
         </CardHeader>

         <CardContent>
            <ClinicInfoDetails doctor={doctor} />
         </CardContent>

         <CardFooter>
            <UpdateClinicButton doctor={doctor} />
         </CardFooter>
      </Card>
   );
}
