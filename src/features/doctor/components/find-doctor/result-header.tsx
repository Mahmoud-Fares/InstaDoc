import {
   Card,
   CardDescription,
   CardHeader,
   CardTitle,
} from '@/shared/components/ui/card';

type ResultHeaderProps = {
   resultCount: number;
};

export const ResultHeader = ({ resultCount }: ResultHeaderProps) => {
   return (
      <Card>
         <CardHeader>
            <CardTitle className='text-2xl'>Search Results</CardTitle>
            <CardDescription>
               Found {resultCount} doctors matching your criteria
            </CardDescription>
         </CardHeader>
      </Card>
   );
};
