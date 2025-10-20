const BASE_URL = import.meta.env.VITE_API_URL;

const getProducts = async () => {
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

const getProductById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/products/${id}`);

    if (!response.ok) {
      throw new Error(`Error fetching product: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const getProductsByCategory = async (category) => {
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
