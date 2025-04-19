import { ReactNode } from 'react';

import { ScheduleContext } from '@/features/doctor/contexts';
import { useScheduleSettings } from '@/features/doctor/hooks/use-schedule-settings';

type ScheduleProviderProps = {
   children: ReactNode;
};

export default function ScheduleProvider({ children }: ScheduleProviderProps) {
   const scheduleState = useScheduleSettings();

   return <ScheduleContext value={scheduleState}>{children}</ScheduleContext>;
}
