import { useState } from 'react';

import { Plus } from 'lucide-react';

import { Button } from '@/shared/components/ui/button';
import { Input } from '@/shared/components/ui/input';

type AddNewProfessionalInputProps = {
   placeholder: string;
   handleAddItem: (item: string) => void;
};

export default function AddNewProfessionalInput({
   placeholder,
   handleAddItem,
}: AddNewProfessionalInputProps) {
   const [newState, setNewState] = useState('');

   return (
      <form
         className='flex gap-2'
         onSubmit={(e) => {
            e.preventDefault();
            handleAddItem(newState);
            setNewState('');
         }}
      >
         <Input
            placeholder={placeholder}
            value={newState}
            onChange={(e) => setNewState(e.target.value)}
         />

         <Button type='submit' disabled={!newState.trim()}>
            <Plus className='h-4 w-4' />
            Add
         </Button>
      </form>
   );
}
