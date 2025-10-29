// Common API Response Type
export interface ApiResponse<T> {
  success: boolean;
  message: string;
  objData: T;
  totalCount?: number;
  pageIndex?: number;
  pageSize?: number;
}

