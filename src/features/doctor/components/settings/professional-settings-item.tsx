import { Trash2 } from 'lucide-react';

import { Button } from '@/shared/components/ui/button';

type ProfessionalSettingsItemProps = {
   item: string;
   handleDeleteItem: (item: string) => void;
};

export default function ProfessionalSettingsItem({
   item,
   handleDeleteItem,
}: ProfessionalSettingsItemProps) {
   return (
      <div className='flex items-center justify-between rounded-md border p-3'>
         <span>{item}</span>
         <Button
            variant='ghost'
            size='sm'
            onClick={() => handleDeleteItem(item)}
            className='text-destructive hover:bg-destructive/10 hover:text-destructive'
         >
            <Trash2 className='h-4 w-4' />
         </Button>
      </div>
   );
}
