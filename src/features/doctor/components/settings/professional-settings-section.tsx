import AddNewProfessionalInput from '@/features/doctor/components/settings/add-new-professional-input';
import ProfessionalSettingsList from '@/features/doctor/components/settings/professional-settings-list';

type ProfessionalSettingsSectionProps = {
   title: string;
   items: string[];
   placeholder: string;
   handleDeleteItem: (item: string) => void;
   handleAddItem: (item: string) => void;
};

export default function ProfessionalSettingsSection({
   title,
   items,
   handleDeleteItem,
   handleAddItem,
   placeholder,
}: ProfessionalSettingsSectionProps) {
   return (
      <div className='space-y-4'>
         <h3 className='text-lg font-medium'>{title}</h3>

         <ProfessionalSettingsList
            items={items}
            handleDeleteItem={handleDeleteItem}
         />

         <AddNewProfessionalInput
            placeholder={placeholder}
            handleAddItem={handleAddItem}
         />
      </div>
   );
}
