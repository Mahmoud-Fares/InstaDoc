import { Briefcase, GraduationCap } from 'lucide-react';

import { Badge } from '@/shared/components/ui/badge';
import {
   Card,
   CardContent,
   CardDescription,
   CardHeader,
   CardTitle,
} from '@/shared/components/ui/card';
import {
   Tabs,
   TabsContent,
   TabsList,
   TabsTrigger,
} from '@/shared/components/ui/tabs';

import { Doctor } from '@/features/doctor/types/doctor';

export default function DoctorProfessionalInformation({
   profile,
}: {
   profile: Doctor;
}) {
   return (
      <>
         <Card className='md:col-span-2'>
            <CardHeader>
               <CardTitle>Professional Information</CardTitle>
               <CardDescription>
                  Your qualifications and practice details
               </CardDescription>
            </CardHeader>
            <CardContent>
               <Tabs defaultValue='qualifications'>
                  <TabsList className='mb-4'>
                     <TabsTrigger value='qualifications'>
                        Qualifications
                     </TabsTrigger>
                     <TabsTrigger value='education'>Education</TabsTrigger>
                     <TabsTrigger value='experience'>Experience</TabsTrigger>
                     <TabsTrigger value='about'>About</TabsTrigger>
                  </TabsList>

                  <TabsContent value='qualifications' className='space-y-4'>
                     {profile?.qualifications &&
                     profile.qualifications.length > 0 ? (
                        <ul className='space-y-2'>
                           {profile.qualifications.map(
                              (qualification: string, index: number) => (
                                 <li key={index} className='flex items-center'>
                                    <Badge variant='outline' className='mr-2'>
                                       Qualification
                                    </Badge>
                                    {qualification}
                                 </li>
                              )
                           )}
                        </ul>
                     ) : (
                        <p className='text-muted-foreground'>
                           No qualifications recorded
                        </p>
                     )}
                  </TabsContent>

                  <TabsContent value='education' className='space-y-4'>
                     {profile?.education && profile.education.length > 0 ? (
                        <ul className='space-y-2'>
                           {profile.education.map(
                              (education: string, index: number) => (
                                 <li key={index} className='flex items-center'>
                                    <GraduationCap className='mr-2 h-4 w-4 text-muted-foreground' />
                                    {education}
                                 </li>
                              )
                           )}
                        </ul>
                     ) : (
                        <p className='text-muted-foreground'>
                           No education history recorded
                        </p>
                     )}
                  </TabsContent>

                  <TabsContent value='experience' className='space-y-4'>
                     {profile?.experience && profile.experience.length > 0 ? (
                        <ul className='space-y-2'>
                           {profile.experience.map(
                              (experience: string, index: number) => (
                                 <li key={index} className='flex items-center'>
                                    <Briefcase className='mr-2 h-4 w-4 text-muted-foreground' />
                                    {experience}
                                 </li>
                              )
                           )}
                        </ul>
                     ) : (
                        <p className='text-muted-foreground'>
                           No experience recorded
                        </p>
                     )}
                  </TabsContent>

                  <TabsContent value='about' className='space-y-4'>
                     {profile?.bio ? (
                        <p>{profile.bio}</p>
                     ) : (
                        <p className='text-muted-foreground'>
                           No about information recorded
                        </p>
                     )}
                  </TabsContent>
               </Tabs>
            </CardContent>
         </Card>
      </>
   );
}
