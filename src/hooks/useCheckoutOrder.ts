import { useState } from "react";
import { useCart } from "../context/CartContext";
import { OrderData } from "../types/checkout.types";

export const useCheckoutOrder = () => {
  const { getCartTotal, handleClearCart, getCartItemsCount } = useCart();
  const [showModal, setShowModal] = useState(false);
  const [orderData, setOrderData] = useState<OrderData | null>(null);

  const calculateTotal = () => {
    const subtotal = getCartTotal();
    const shipping = subtotal > 150 ? 0 : 5;
    return subtotal + shipping;
  };

  const handleCheckout = () => {
    setOrderData({
      total: calculateTotal(),
      itemsCount: getCartItemsCount(),
    });

    handleClearCart();
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setOrderData(null);
  };

  return {
    showModal,
    orderData,
    calculateTotal,
    handleCheckout,
    handleCloseModal,
  };
};
