import { use } from 'react';

import { ScheduleContext } from '@/features/doctor/contexts';
import { ScheduleContextType } from '@/features/doctor/hooks/use-schedule-settings';

export const useSchedule = (): ScheduleContextType => {
   const context = use(ScheduleContext);

   if (context === undefined)
      throw new Error('useSchedule must be used within a ScheduleProvider');

   return context;
};
