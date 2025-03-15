import { Link } from 'react-router-dom';

export function LoginFooter() {
   return (
      <div className='flex flex-col items-center justify-center gap-2 text-center text-sm'>
         <div>
            Don&apos;t have an account?{' '}
            <Link to='/signup' className='underline'>
               Sign up
            </Link>
         </div>

         <Link to='/forgot-password'>Forgot your password?</Link>
      </div>
   );
}
