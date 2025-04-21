export const convertDateToString = (date: Date) => {
   const hours = date.getHours();
   const minutes = date.getMinutes();
   const roundedMinutes = Math.round(minutes / 5) * 5;
   return `${hours.toString().padStart(2, '0')}:${roundedMinutes.toString().padStart(2, '0')}`;
};

export const convertStringToDate = (time: string) => {
   const [hours, minutes] = time.split(':').map(Number);
   return new Date(new Date().setHours(hours, minutes, 0, 0));
};
