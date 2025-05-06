type ApiSuccess<T> = {
   status: number;
   msg: string;
   data: T;
};

type ApiSuccessWithPagination<T> = {
   status: number;
   msg: string;
   data: {
      data: T;
      pagination: {
         current_page: number;
         per_page: number;
         total: number;
         last_page: number;
      };
   };
};

type ApiError = {
   message: string;
   errors?: Record<string, string[]>;
};

export type ApiResponse<T> =
   | ApiSuccess<T>
   | ApiSuccessWithPagination<T>
   | ApiError;
