import { AxiosError } from "axios";
import axios from "./axiosConfig";
import { Product } from "../types/product.types";

const getProducts = async (): Promise<Product[]> => {
  try {
    const response = await axios.get("/products?limit=6");

    if (!response.data) {
      throw new Error("Empty response from server");
    }

    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    console.error(
      "[getProducts] Error fetching products:",
      axiosError.response
    );
    throw error;
  }
};

const getProductById = async (id: number): Promise<Product> => {
  try {
    const response = await axios.get(`/products/${id}`);

    if (!response.data) {
      throw new Error("Empty response from server");
    }

    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    console.error(
      "[getProductById] Error fetching product:",
      axiosError.response?.data
    );
    throw error;
  }
};

const getProductsByCategory = async (category: string): Promise<Product[]> => {
  try {
    const url =
      category === "all" ? `/products` : `/products/category/${category}`;

    const response = await axios.get(url);

    if (!response.data) {
      throw new Error("Empty response from server");
    }

    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    console.error(
      "[getProductsByCategory] Error fetching products:",
      axiosError.response?.data
    );
    throw error;
  }
};

export const productService = {
  getProducts,
  getProductById,
  getProductsByCategory,
};
