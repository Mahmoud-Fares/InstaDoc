import EmptyState from '@/shared/components/empty-state';

import ProfessionalSettingsItem from '@/features/doctor/components/settings/professional-settings-item';

type ProfessionalSettingsListProps = {
   items: string[];
   handleDeleteItem: (item: string) => void;
};

export default function ProfessionalSettingsList({
   items,
   handleDeleteItem,
}: ProfessionalSettingsListProps) {
   if (items.length === 0)
      return (
         <EmptyState
            className='h-24 rounded-md border p-3'
            message='No items added'
         />
      );

   return (
      <div className='space-y-2'>
         {items.map((item, index) => (
            <ProfessionalSettingsItem
               key={index}
               item={item}
               handleDeleteItem={handleDeleteItem}
            />
         ))}
      </div>
   );
}
