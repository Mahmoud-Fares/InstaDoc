import { cn } from '@/shared/lib/utils';

type EmptyStateProps = {
   message: string;
   icon?: React.ReactNode;
   className?: string;
};

export default function EmptyState({
   message,
   icon,
   className,
}: EmptyStateProps) {
   return (
      <div
         className={cn(
            'flex flex-col items-center justify-center gap-4',
            className
         )}
      >
         {icon && <div>{icon}</div>}
         <p className='text-muted-foreground'>{message}</p>
      </div>
   );
}
