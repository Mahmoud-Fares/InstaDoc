import {
   AlertDialog,
   AlertDialogAction,
   AlertDialogCancel,
   AlertDialogContent,
   AlertDialogDescription,
   AlertDialogFooter,
   AlertDialogHeader,
   AlertDialogTitle,
   AlertDialogTrigger,
} from '@/shared/components/ui/alert-dialog';
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

export default function SecuritySettings() {
   return (
      <Card>
         <CardHeader>
            <CardTitle>Change Password</CardTitle>
            <CardDescription>
               Update your password to keep your account secure
            </CardDescription>
         </CardHeader>

         <CardContent className='space-y-4'>
            <div className='space-y-2'>
               <Label htmlFor='current-password'>Current Password</Label>
               <Input id='current-password' type='password' />
            </div>

            <div className='space-y-2'>
               <Label htmlFor='new-password'>New Password</Label>
               <Input id='new-password' type='password' />
            </div>

            <div className='space-y-2'>
               <Label htmlFor='confirm-password'>Confirm New Password</Label>
               <Input id='confirm-password' type='password' />
            </div>
         </CardContent>

         <CardFooter className='flex flex-wrap items-center justify-between'>
            <Button>Change Password</Button>
            <DeleteAccount />
         </CardFooter>
      </Card>
   );
}

function DeleteAccount() {
   return (
      <AlertDialog>
         <AlertDialogTrigger asChild>
            <Button variant='destructive'>Delete Account</Button>
         </AlertDialogTrigger>
         <AlertDialogContent>
            <AlertDialogHeader>
               <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
               <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove all your data from our servers.
               </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
               <AlertDialogCancel>Cancel</AlertDialogCancel>
               <AlertDialogAction className='bg-destructive text-destructive-foreground'>
                  Delete Account
               </AlertDialogAction>
            </AlertDialogFooter>
         </AlertDialogContent>
      </AlertDialog>
   );
}
