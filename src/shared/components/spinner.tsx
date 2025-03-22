import { Loader } from 'lucide-react';

import { cn } from '@/shared/lib/utils';

export default function Spinner({ className }: { className?: string }) {
   return <Loader className={cn('h-4 w-4 animate-spin', className)} />;
}
