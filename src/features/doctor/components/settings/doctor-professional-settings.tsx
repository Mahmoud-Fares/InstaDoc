'use no memo';

import React from 'react';

import {
   Card,
   CardContent,
   CardDescription,
   CardHeader,
   CardTitle,
} from '@/shared/components/ui/card';
import { Separator } from '@/shared/components/ui/separator';

import { isDoctor, useAuth } from '@/features/auth';
import ProfessionalSettingsForm from '@/features/doctor/components/form/professional-settings';
import ProfessionalSettingsSection from '@/features/doctor/components/settings/professional-settings-section';
import { useProfessionalSettings } from '@/features/doctor/hooks/use-professional-settings';

export default function DoctorProfessionalSettings() {
   const { currentUser } = useAuth();
   const {
      specialties,
      qualifications,
      education,
      experience,

      AddSpecialty,
      DeleteSpecialty,
      AddQualification,
      DeleteQualification,
      AddEducation,
      DeleteEducation,
      AddExperience,
      DeleteExperience,

      form,
      handleSaveChanges,
   } = useProfessionalSettings();

   const SETTINGS_SECTIONS = [
      {
         title: 'Specialties',
         items: specialties,
         handleDeleteItem: DeleteSpecialty,
         handleAddItem: AddSpecialty,
         placeholder: 'Add a specialty',
      },
      {
         title: 'Qualifications',
         items: qualifications,
         handleDeleteItem: DeleteQualification,
         handleAddItem: AddQualification,
         placeholder: 'Add a qualification',
      },
      {
         title: 'Education',
         items: education,
         handleDeleteItem: DeleteEducation,
         handleAddItem: AddEducation,
         placeholder: 'Add education',
      },
      {
         title: 'Experience',
         items: experience,
         handleDeleteItem: DeleteExperience,
         handleAddItem: AddExperience,
         placeholder: 'Add experience',
      },
   ];

   return (
      isDoctor(currentUser!) && (
         <Card>
            <CardHeader>
               <CardTitle>Professional Information</CardTitle>
               <CardDescription>
                  Update your professional details
               </CardDescription>
            </CardHeader>

            <CardContent className='space-y-6'>
               {SETTINGS_SECTIONS.map((section) => (
                  <React.Fragment key={section.title}>
                     <ProfessionalSettingsSection {...section} />
                     <Separator />
                  </React.Fragment>
               ))}

               <ProfessionalSettingsForm
                  form={form}
                  onSubmit={handleSaveChanges}
               />
            </CardContent>
         </Card>
      )
   );
}
