import { useCart } from "./useCart";
import { UseProductCardProps } from "../types/product.types";

export const useProductCard = ({
  id,
  title,
  price,
  category,
  description,
  image,
}: UseProductCardProps) => {
  const { handleAddToCart } = useCart();

  const handleAddToCartClick = () => {
    const product = {
      id,
      title,
      price,
      category,
      description,
      image,
    };
    handleAddToCart(product);
  };

  return { handleAddToCartClick };
};
