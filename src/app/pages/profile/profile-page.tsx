import { Navigate, useParams } from 'react-router-dom';

import { getUserBySlug, isDoctor, useAuth } from '@/features/auth';

import DoctorProfile from '@/app/pages/profile/doctor-profile';
import PatientProfile from '@/app/pages/profile/patient-profile';

/**
 * This page is used to display the profile of a user (current user or visited users).
 * if there is no slug, it will redirect to the current user's profile.
 * if there is a slug, it will display the profile of the visited according that slug.
 * if the user is not found, it will redirect to the not found page.
 */

export default function ProfilePage() {
   const { slug } = useParams<{ slug?: string }>();
   const { currentUser } = useAuth();

   if (!slug) return <Navigate to={`/profile/${currentUser!.slug}`} />;

   const profileUser = getUserBySlug(slug);

   if (!profileUser) return <Navigate to='/not-found' replace />;

   if (isDoctor(profileUser)) return <DoctorProfile doctor={profileUser} />;
   return <PatientProfile patient={profileUser} />;
}
