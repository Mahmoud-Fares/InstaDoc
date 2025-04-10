import React from 'react';

import { LucideProps } from 'lucide-react';

import {
   DropdownMenuGroup,
   DropdownMenuItem,
   DropdownMenuSeparator,
} from '@/shared/components/ui/dropdown-menu';

type MenuItem = {
   label: string;
   action: () => void;
   icon: React.ForwardRefExoticComponent<
      Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>
   >;
};

const MenuGroup = ({ items }: { items: MenuItem[] }) => {
   return (
      <DropdownMenuGroup>
         {items.map((item) => (
            <DropdownMenuItem key={item.label} onClick={item.action}>
               <item.icon
                  size={16}
                  strokeWidth={2}
                  className='opacity-60'
                  aria-hidden='true'
               />
               <span>{item.label}</span>
            </DropdownMenuItem>
         ))}
      </DropdownMenuGroup>
   );
};

export default function RenderMenuGroups({ groups }: { groups: MenuItem[][] }) {
   return (
      <>
         {groups.map((group, index) => (
            <React.Fragment key={`group-${index}`}>
               <MenuGroup items={group} />
               {index < groups.length - 1 && <DropdownMenuSeparator />}
            </React.Fragment>
         ))}
      </>
   );
}
