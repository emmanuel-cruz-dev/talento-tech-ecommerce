import { useState, useEffect } from "react";
import { productService } from "../services/product";
import {
  Product,
  UseProductByIdReturn,
  UseProductsReturn,
} from "../types/product.types";

export const useProducts = (): UseProductsReturn => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await productService.getProducts();
        setProducts(data);
      } catch (err: unknown) {
        const errorMessage =
          err instanceof Error ? err.message : "Error al cargar los productos";
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, loading, error };
};

export const useProductById = (id: number): UseProductByIdReturn => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await productService.getProductById(id);
        setProduct(data);
      } catch (err: unknown) {
        const errorMessage =
          err instanceof Error ? err.message : "Error al cargar el producto";
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  return { product, loading, error };
};

export const useProductsByCategory = (category: string): UseProductsReturn => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await productService.getProductsByCategory(category);
        setProducts(data);
      } catch (err: unknown) {
        const errorMessage =
          err instanceof Error ? err.message : "Error al cargar los productos";
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    if (category) {
      fetchProducts();
    }
  }, [category]);

  return { products, loading, error };
};
