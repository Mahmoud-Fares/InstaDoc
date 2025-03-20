import Container from '@/shared/components/container';
import PersonalSettings from '@/shared/components/settings/personal-settings';
import SecuritySettings from '@/shared/components/settings/security-settings';
import {
   Tabs,
   TabsContent,
   TabsList,
   TabsTrigger,
} from '@/shared/components/ui/tabs';

import { DOCTORS } from '@/features/doctor';
import DoctorClinicSettings from '@/features/doctor/components/settings/doctor-clinic-settings';
import DoctorProfessionalSettings from '@/features/doctor/components/settings/doctor-professional-settings';
import DoctorScheduleSettings from '@/features/doctor/components/settings/doctor-schedule-settings';

export default function DoctorSettings() {
   const currentUser = DOCTORS[0];

   return (
      <Container className='py-10'>
         <h1 className='mb-6 text-3xl font-bold'>Settings</h1>

         <Tabs defaultValue='personal' className='space-y-6'>
            <TabsList className='flex h-fit w-fit flex-wrap justify-start gap-2 p-2'>
               <TabsTrigger value='personal'>Personal</TabsTrigger>
               <TabsTrigger value='professional'>Professional</TabsTrigger>
               <TabsTrigger value='clinic'>Clinic</TabsTrigger>
               <TabsTrigger value='availability'>Availability</TabsTrigger>
               <TabsTrigger value='security'>Security</TabsTrigger>
            </TabsList>

            <TabsContent value='personal'>
               <PersonalSettings />
            </TabsContent>

            <DoctorProfessionalSettings currentUser={currentUser} />

            <DoctorClinicSettings currentUser={currentUser} />

            <DoctorScheduleSettings />

            <TabsContent value='security'>
               <SecuritySettings />
            </TabsContent>
         </Tabs>
      </Container>
   );
}
