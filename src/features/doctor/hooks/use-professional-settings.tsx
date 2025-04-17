import { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import * as z from 'zod';

import { isDoctor, useAuth } from '@/features/auth';
import { professionalSettingsSchema } from '@/features/doctor/schema/professional-settings-schema';

export const useProfessionalSettings = () => {
   const { currentUser } = useAuth();

   const [specialties, setSpecialties] = useState<string[]>(
      isDoctor(currentUser!) ? currentUser.specialties : []
   );
   const [qualifications, setQualifications] = useState<string[]>(
      isDoctor(currentUser!) ? currentUser.qualifications : []
   );
   const [education, setEducation] = useState<string[]>(
      isDoctor(currentUser!) ? currentUser.education : []
   );
   const [experience, setExperience] = useState<string[]>(
      isDoctor(currentUser!) ? currentUser.experience : []
   );

   const handleAdd = (
      item: string,
      setItems: React.Dispatch<React.SetStateAction<string[]>>
   ) => {
      setItems((prev) => [...new Set([...prev, item])]);
   };
   const handleDelete = (
      item: string,
      setItems: React.Dispatch<React.SetStateAction<string[]>>
   ) => {
      setItems((prev) => [...new Set([...prev].filter((i) => i !== item))]);
   };

   const AddSpecialty = (specialty: string) =>
      handleAdd(specialty, setSpecialties);

   const DeleteSpecialty = (specialty: string) =>
      handleDelete(specialty, setSpecialties);

   const AddQualification = (qualification: string) =>
      handleAdd(qualification, setQualifications);

   const DeleteQualification = (qualification: string) =>
      handleDelete(qualification, setQualifications);

   const AddEducation = (education: string) =>
      handleAdd(education, setEducation);

   const DeleteEducation = (education: string) =>
      handleDelete(education, setEducation);

   const AddExperience = (experience: string) =>
      handleAdd(experience, setExperience);

   const DeleteExperience = (experience: string) =>
      handleDelete(experience, setExperience);

   const form = useForm<z.infer<typeof professionalSettingsSchema>>({
      resolver: zodResolver(professionalSettingsSchema),
      defaultValues: {
         about: currentUser?.bio || '',
         specialties: specialties,
         qualifications: qualifications,
         education: education,
         experience: experience,
      },
   });

   function onSubmit(values: z.infer<typeof professionalSettingsSchema>) {
      try {
         console.log(values);
         // TODO: Rename the file to .ts after we have the backend logic (not a big deal)
         toast(
            <pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
               <code className='text-white'>
                  ${JSON.stringify(values, null, 2)}
               </code>
            </pre>
         );
      } catch (error) {
         console.error('Form submission error', error);
         toast.error('Failed to submit the form. Please try again.');
      }
   }

   const handleSaveChanges = () => {
      onSubmit({
         ...form.getValues(),
         specialties,
         qualifications,
         education,
         experience,
      });
   };

   return {
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
   };
};
