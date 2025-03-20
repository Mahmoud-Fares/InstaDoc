import Container from '@/shared/components/container';
import PersonalSettings from '@/shared/components/settings/personal-settings';
import SecuritySettings from '@/shared/components/settings/security-settings';
import {
   Tabs,
   TabsContent,
   TabsList,
   TabsTrigger,
} from '@/shared/components/ui/tabs';

import EmergencySettings from '@/features/patient/components/settings/emergency-settings';

const PATIENT_SETTINGS_TABS = [
   {
      label: 'Personal',
      value: 'personal',
      component: <PersonalSettings />,
   },
   {
      label: 'Emergency',
      value: 'emergency',
      component: <EmergencySettings />,
   },
   {
      label: 'Security',
      value: 'security',
      component: <SecuritySettings />,
   },
];

export default function PatientSettings() {
   return (
      <Container className='py-10'>
         <h1 className='mb-6 text-3xl font-bold'>Settings</h1>

         <Tabs defaultValue='personal' className='space-y-6'>
            <TabsList className='flex h-fit w-fit flex-wrap justify-start gap-2 p-2'>
               {PATIENT_SETTINGS_TABS.map((tab) => (
                  <TabsTrigger key={tab.value} value={tab.value}>
                     {tab.label}
                  </TabsTrigger>
               ))}
            </TabsList>

            {PATIENT_SETTINGS_TABS.map((tab) => (
               <TabsContent key={tab.value} value={tab.value}>
                  {tab.component}
               </TabsContent>
            ))}
         </Tabs>
      </Container>
   );
}
