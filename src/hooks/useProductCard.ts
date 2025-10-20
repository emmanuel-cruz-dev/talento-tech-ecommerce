import { useCart } from "../context/CartContext";

export const useProductCard = ({ id, title, price, description, image }) => {
  const { handleAddToCart } = useCart();

  const handleAddToCartClick = () => {
    const product = {
      id,
      title,
      price,
      description,
      image,
    };
    handleAddToCart(product);
  };

  return { handleAddToCartClick };
};
