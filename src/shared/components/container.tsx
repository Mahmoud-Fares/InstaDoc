import { cn } from '@/shared/lib/utils';

export default function Container({
   children,
   className,
}: {
   children: React.ReactNode;
   className?: string;
}) {
   return (
      <div className={cn('container mx-auto px-4', className)}>{children}</div>
   );
}
