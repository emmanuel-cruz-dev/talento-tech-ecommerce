export interface ErrorMessageProps {
  error: Error | string;
  entity: string;
  onRetry?: () => void;
}

export interface PaginationItemProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  isLoading: boolean;
}

export interface ErrorWithCode extends Error {
  code?: string;
}
