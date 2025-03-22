import { Link } from 'react-router-dom';

export default function Logo() {
   return (
      <Link
         to={'/'}
         className='flex items-center duration-300 hover:text-primary'
      >
         <span className='text-xl font-bold'>InstaDoc</span>
      </Link>
   );
}
