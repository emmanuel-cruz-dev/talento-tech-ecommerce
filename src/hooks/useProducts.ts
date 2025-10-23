import { useQuery } from "@tanstack/react-query";
import { productService } from "../services/product";
import {
  UseProductByIdReturn,
  UseProductsReturn,
} from "../types/product.types";

export const useProducts = (): UseProductsReturn => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: productService.getProducts,
  });

  return {
    products: data ?? [],
    loading: isLoading,
    error: error instanceof Error ? error.message : null,
  };
};

export const useProductById = (id: number): UseProductByIdReturn => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["product", id],
    queryFn: () => productService.getProductById(id),
    enabled: !!id,
  });

  return {
    product: data ?? null,
    loading: isLoading,
    error: error instanceof Error ? error.message : null,
  };
};

export const useProductsByCategory = (category: string): UseProductsReturn => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["products", "category", category],
    queryFn: () => productService.getProductsByCategory(category),
    enabled: !!category,
  });

  return {
    products: data ?? [],
    loading: isLoading,
    error: error instanceof Error ? error.message : null,
  };
};
