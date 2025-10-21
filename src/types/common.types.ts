export interface ErrorMessageProps {
  error: Error | string;
  entity: string;
  onRetry?: () => void;
}
