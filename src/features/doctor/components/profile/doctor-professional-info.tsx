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
import { cn } from '@/shared/lib/utils';
import { Doctor } from '@/shared/types';

import DoctorAbout from './professional-info/doctor-about';
import DoctorEducation from './professional-info/doctor-education';
import DoctorExperience from './professional-info/doctor-experience';
import DoctorQualifications from './professional-info/doctor-qualifications';

type DoctorProfessionalInformationProps = {
   doctor: Doctor;
   className?: string;
};

export default function DoctorProfessionalInformation({
   doctor,
   className,
}: DoctorProfessionalInformationProps) {
   const tabs = [
      {
         label: 'Qualifications',
         value: 'qualifications',
         component: <DoctorQualifications doctor={doctor} />,
      },
      {
         label: 'Education',
         value: 'education',
         component: <DoctorEducation doctor={doctor} />,
      },
      {
         label: 'Experience',
         value: 'experience',
         component: <DoctorExperience doctor={doctor} />,
      },
      {
         label: 'About',
         value: 'about',
         component: <DoctorAbout doctor={doctor} />,
      },
   ];

   return (
      <Card className={cn(className)}>
         <CardHeader>
            <CardTitle>Professional Information</CardTitle>
            <CardDescription>
               Your qualifications and practice details
            </CardDescription>
         </CardHeader>

         <CardContent>
            <Tabs className='space-y-4' defaultValue='qualifications'>
               <TabsList className='flex h-fit w-fit flex-wrap justify-start gap-2 p-2 *:flex-1'>
                  {tabs.map((tab) => (
                     <TabsTrigger key={tab.value} value={tab.value}>
                        {tab.label}
                     </TabsTrigger>
                  ))}
               </TabsList>

               {tabs.map((tab) => (
                  <TabsContent key={tab.value} value={tab.value}>
                     {tab.component}
                  </TabsContent>
               ))}
            </Tabs>
         </CardContent>
      </Card>
   );
}
