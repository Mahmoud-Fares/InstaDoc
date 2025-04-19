import { createContext } from 'react';

import { ScheduleContextType } from '@/features/doctor/hooks/use-schedule-settings';

export const ScheduleContext = createContext<ScheduleContextType | undefined>(
   undefined
);
