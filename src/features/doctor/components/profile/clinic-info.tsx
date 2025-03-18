import { MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/shared/components/ui/button';
import {
   Card,
   CardContent,
   CardFooter,
   CardHeader,
   CardTitle,
} from '@/shared/components/ui/card';

import { Doctor } from '@/features/doctor/types/doctor';

export default function ClinicInformation({ profile }: { profile: Doctor }) {
   const navigate = useNavigate();

   return (
      <Card>
         <CardHeader>
            <CardTitle className='flex items-center'>
               <MapPin className='mr-2 h-5 w-5' />
               Clinic Information
            </CardTitle>
         </CardHeader>

         <CardContent>
            {profile?.workInfo ? (
               <div className='space-y-2'>
                  <p className='font-medium'>{profile.workInfo.name}</p>
                  <p className='text-sm text-muted-foreground'>
                     {profile.workInfo.address}
                  </p>
                  <p className='text-sm text-muted-foreground'>
                     Phone: {profile.workInfo.phone}
                  </p>
               </div>
            ) : (
               <p className='text-muted-foreground'>
                  No Clinic information recorded
               </p>
            )}
         </CardContent>

         <CardFooter>
            <Button
               variant='outline'
               size='sm'
               className='w-full'
               onClick={() => navigate('/settings')}
            >
               Update Clinic Information
            </Button>
         </CardFooter>
      </Card>
   );
}
