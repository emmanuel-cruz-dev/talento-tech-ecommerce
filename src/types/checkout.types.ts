export interface CheckoutModalProps {
  show: boolean;
  onHide: () => void;
  orderTotal: number;
  itemsCount: number;
}

export interface CheckoutSummaryProps {
  orderTotal: number;
  itemsCount: number;
}

export interface OrderData {
  total: number;
  itemsCount: number;
}

export interface SummaryRowProps {
  label: string;
  value: string;
  className?: string;
  valueClassName?: string;
}
