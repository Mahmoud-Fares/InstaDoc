import { Link } from 'react-router-dom';

export function SignupFooter() {
   return (
      <div className='text-center text-sm'>
         Already have an account?{' '}
         <Link to='/login' className='underline'>
            Login
         </Link>
      </div>
   );
}
