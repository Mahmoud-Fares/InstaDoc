import { useSearchParams } from 'react-router-dom';

import Container from '@/shared/components/container';
import {
   Tabs,
   TabsContent,
   TabsList,
   TabsTrigger,
} from '@/shared/components/ui/tabs';

import DoctorClinicSettings from '@/features/doctor/components/settings/doctor-clinic-settings';
import DoctorProfessionalSettings from '@/features/doctor/components/settings/doctor-professional-settings';
import DoctorScheduleSettings from '@/features/doctor/components/settings/doctor-schedule-settings';

import PersonalSettings from '@/app/pages/settings/components/personal-settings';
import SecuritySettings from '@/app/pages/settings/components/security-settings';

const DOCTOR_SETTINGS_TABS = [
   {
      label: 'Personal',
      value: 'personal',
      component: <PersonalSettings />,
   },
   {
      label: 'Professional',
      value: 'professional',
      component: <DoctorProfessionalSettings />,
   },
   {
      label: 'Clinic',
      value: 'clinic',
      component: <DoctorClinicSettings />,
   },
   {
      label: 'Availability',
      value: 'availability',
      component: <DoctorScheduleSettings />,
   },
   {
      label: 'Security',
      value: 'security',
      component: <SecuritySettings />,
   },
];

export default function DoctorSettings() {
   const [searchParams, setSearchParams] = useSearchParams();
   const activeTab = searchParams.get('active-tab') || 'personal';

   const handleTabChange = (value: string) => {
      setSearchParams(
         (params) => {
            params.set('active-tab', value);
            return params;
         },
         { replace: true }
      );
   };

   return (
      <Container className='py-10'>
         <h1 className='mb-6 text-3xl font-bold'>Settings</h1>

         <Tabs
            defaultValue={activeTab}
            className='space-y-6'
            onValueChange={handleTabChange}
         >
            <TabsList className='flex h-fit w-fit flex-wrap justify-start gap-2 p-2'>
               {DOCTOR_SETTINGS_TABS.map((tab) => (
                  <TabsTrigger key={tab.value} value={tab.value}>
                     {tab.label}
                  </TabsTrigger>
               ))}
            </TabsList>

            {DOCTOR_SETTINGS_TABS.map((tab) => (
               <TabsContent key={tab.value} value={tab.value}>
                  {tab.component}
               </TabsContent>
            ))}
         </Tabs>
      </Container>
   );
}
