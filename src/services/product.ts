import { Product } from "../types/product";

const BASE_URL = import.meta.env.VITE_API_URL;

const getProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch(`${BASE_URL}/products?limit=6`);

    if (!response.ok) {
      throw new Error(`Error fetching products: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const getProductById = async (id: number): Promise<Product> => {
  try {
    const response = await fetch(`${BASE_URL}/products/${id}`);

    if (!response.ok) {
      throw new Error(`Error fetching product: ${response.status}`);
    }

    const text = await response.text();
    if (!text) {
      throw new Error("Empty response from server");
    }

    const data = JSON.parse(text);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const getProductsByCategory = async (category: string): Promise<Product[]> => {
  try {
    const url =
      category === "all"
        ? `${BASE_URL}/products`
        : `${BASE_URL}/products/category/${category}`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Error fetching products: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const productService = {
  getProducts,
  getProductById,
  getProductsByCategory,
};
