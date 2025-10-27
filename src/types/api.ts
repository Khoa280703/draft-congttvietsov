// API Types
export interface ApiResponse<T> {
  title: string;
  code: number;
  objData: T;
  id: number;
  data: string;
  isError: boolean;
  type: number;
}

export interface PaginationParams {
  page: number;
  pageSize: number;
}

export interface SearchParams extends PaginationParams {
  query: string;
}
