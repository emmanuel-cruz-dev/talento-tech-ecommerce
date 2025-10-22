import { useState, ReactNode } from "react";
import { CartContext } from "../hooks/useCart";
import { Product } from "../types/product.types";
import { CartItem } from "../types/cart.types";

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  const handleAddToCart = (product: Product): void => {
    const existingProductIndex = cart.findIndex((p) => p.id === product.id);

    if (existingProductIndex !== -1) {
      const newCart = cart.map((item, index) =>
        index === existingProductIndex
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCart(newCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const handleRemoveFromCart = (product: Product): void => {
    const newCart = cart.filter((p) => p.id !== product.id);
    setCart(newCart);
  };

  const handleDecreaseQuantity = (product: Product): void => {
    const existingProductIndex = cart.findIndex((p) => p.id === product.id);

    if (existingProductIndex !== -1) {
      const existingProduct = cart[existingProductIndex];

      if (existingProduct.quantity > 1) {
        const newCart = cart.map((item, index) =>
          index === existingProductIndex
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
        setCart(newCart);
      } else {
        handleRemoveFromCart(product);
      }
    }
  };

  const handleClearCart = (): void => {
    setCart([]);
  };

  const getCartTotal = (): number => {
    return cart.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  };

  const getCartItemsCount = (): number => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        handleAddToCart,
        handleRemoveFromCart,
        handleDecreaseQuantity,
        handleClearCart,
        getCartTotal,
        getCartItemsCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
