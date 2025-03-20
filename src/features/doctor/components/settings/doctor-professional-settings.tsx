import { Plus, Trash2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/shared/components/ui/button';
import {
   Card,
   CardContent,
   CardDescription,
   CardFooter,
   CardHeader,
   CardTitle,
} from '@/shared/components/ui/card';
import { Input } from '@/shared/components/ui/input';
import { Label } from '@/shared/components/ui/label';
import { Separator } from '@/shared/components/ui/separator';
import { Textarea } from '@/shared/components/ui/textarea';

import { isDoctor, useAuth } from '@/features/auth';

export default function DoctorProfessionalSettings() {
   const navigate = useNavigate();
   const { currentUser } = useAuth();

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
               {/* Specialties */}
               <div className='space-y-4'>
                  <h3 className='text-lg font-medium'>Specialties</h3>

                  <div className='space-y-2'>
                     {currentUser?.specialties.map((specialty, index) => (
                        <div
                           key={index}
                           className='flex items-center justify-between rounded-md border p-3'
                        >
                           <span>{specialty}</span>
                           <Button
                              variant='ghost'
                              size='sm'
                              className='text-destructive hover:bg-destructive/10 hover:text-destructive'
                           >
                              <Trash2 className='h-4 w-4' />
                           </Button>
                        </div>
                     ))}
                  </div>

                  <div className='flex space-x-2'>
                     <Input placeholder='Add a specialty' />
                     <Button>
                        <Plus className='mr-1 h-4 w-4' />
                        Add
                     </Button>
                  </div>
               </div>

               <Separator />

               {/* Qualifications */}
               <div className='space-y-4'>
                  <h3 className='text-lg font-medium'>Qualifications</h3>

                  <div className='space-y-2'>
                     {currentUser?.qualifications.map(
                        (qualification, index) => (
                           <div
                              key={index}
                              className='flex items-center justify-between rounded-md border p-3'
                           >
                              <span>{qualification}</span>
                              <Button
                                 variant='ghost'
                                 size='sm'
                                 className='text-destructive hover:bg-destructive/10 hover:text-destructive'
                              >
                                 <Trash2 className='h-4 w-4' />
                              </Button>
                           </div>
                        )
                     )}
                  </div>

                  <div className='flex space-x-2'>
                     <Input placeholder='Add a qualification (e.g., MD, FACC)' />
                     <Button>
                        <Plus className='mr-1 h-4 w-4' />
                        Add
                     </Button>
                  </div>
               </div>

               <Separator />

               {/* Education */}
               <div className='space-y-4'>
                  <h3 className='text-lg font-medium'>Education</h3>

                  <div className='space-y-2'>
                     {currentUser?.education.map((edu, index) => (
                        <div
                           key={index}
                           className='flex items-center justify-between rounded-md border p-3'
                        >
                           <span>{edu}</span>
                           <Button
                              variant='ghost'
                              size='sm'
                              className='text-destructive hover:bg-destructive/10 hover:text-destructive'
                           >
                              <Trash2 className='h-4 w-4' />
                           </Button>
                        </div>
                     ))}
                  </div>

                  <div className='flex space-x-2'>
                     <Input placeholder='Add education (e.g., Harvard Medical School)' />
                     <Button>
                        <Plus className='mr-1 h-4 w-4' />
                        Add
                     </Button>
                  </div>
               </div>

               <Separator />

               {/* Experience */}
               <div className='space-y-4'>
                  <h3 className='text-lg font-medium'>Experience</h3>

                  <div className='space-y-2'>
                     {currentUser?.experience.map((exp, index) => (
                        <div
                           key={index}
                           className='flex items-center justify-between rounded-md border p-3'
                        >
                           <span>{exp}</span>
                           <Button
                              variant='ghost'
                              size='sm'
                              className='text-destructive hover:bg-destructive/10 hover:text-destructive'
                           >
                              <Trash2 className='h-4 w-4' />
                           </Button>
                        </div>
                     ))}
                  </div>

                  <div className='flex space-x-2'>
                     <Input placeholder='Add experience (e.g., 10+ years in cardiology)' />
                     <Button>
                        <Plus className='mr-1 h-4 w-4' />
                        Add
                     </Button>
                  </div>
               </div>

               <Separator />

               {/* About */}
               <div className='space-y-2'>
                  <Label htmlFor='about'>About</Label>
                  <Textarea
                     id='about'
                     value={currentUser?.bio}
                     placeholder='Describe your practice, approach, and specialization'
                     rows={5}
                  />
               </div>
            </CardContent>
            <CardFooter className='flex justify-end space-x-2'>
               <Button variant='outline' onClick={() => navigate('/profile')}>
                  Cancel
               </Button>
               <Button>Save Changes</Button>
            </CardFooter>
         </Card>
      )
   );
}
