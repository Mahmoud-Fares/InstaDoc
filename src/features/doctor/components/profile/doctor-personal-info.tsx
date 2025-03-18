import { Mail, Phone, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import {
   Avatar,
   AvatarFallback,
   AvatarImage,
} from '@/shared/components/ui/avatar';
import { Button } from '@/shared/components/ui/button';
import {
   Card,
   CardContent,
   CardDescription,
   CardFooter,
   CardHeader,
   CardTitle,
} from '@/shared/components/ui/card';

import { Doctor } from '@/features/doctor/types/doctor';

export default function DoctorPersonalInformation({
   profile,
}: {
   profile: Doctor;
}) {
   const navigate = useNavigate();

   return (
      <Card className='md:col-span-1'>
         <CardHeader className='flex flex-row items-center gap-4'>
            <Avatar className='h-16 w-16'>
               <AvatarImage src={profile.avatar} alt={profile.name} />
               <AvatarFallback>
                  {profile.name
                     .split(' ')
                     .map((n: string) => n[0])
                     .join('')}
               </AvatarFallback>
            </Avatar>

            <div>
               <CardTitle>{profile.name}</CardTitle>
               <CardDescription>
                  {profile.specialties?.join(', ')}
               </CardDescription>
            </div>
         </CardHeader>

         <CardContent className='space-y-4'>
            <div className='flex items-center'>
               <Mail className='mr-2 h-4 w-4 text-muted-foreground' />
               <span>{profile.email}</span>
            </div>
            <div className='flex items-center'>
               <Phone className='mr-2 h-4 w-4 text-muted-foreground' />
               <span>{profile.phone || 'No phone number'}</span>
            </div>
            <div className='flex items-center'>
               <Star className='mr-2 h-4 w-4 text-yellow-500' />
               <span>
                  {profile.averageRating} ({profile.reviewCount} reviews)
               </span>
            </div>
         </CardContent>

         <CardFooter>
            <Button
               variant='outline'
               className='w-full'
               onClick={() => navigate('/settings')}
            >
               Edit Profile
            </Button>
         </CardFooter>
      </Card>
   );
}
