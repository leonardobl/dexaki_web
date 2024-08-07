export interface IPagination {
  path: string;
  limit: number;
  current_page: number;
  total_page: number;
  total_register: number;
  next_page: number;
  prev_page: boolean;
}

export interface IPageRequest {
  page?: number;
  limit?: number;
}
