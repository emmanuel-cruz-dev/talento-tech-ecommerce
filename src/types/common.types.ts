export interface CheckoutModalProps {
  show: boolean;
  onHide: () => void;
  orderTotal: number;
  itemsCount: number;
}
