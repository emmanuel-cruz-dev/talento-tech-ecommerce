import { LucideIcon } from "lucide-react";

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating?: {
    rate: number;
    count: number;
  };
}

export type ProductCardProps =
  | {
      isLoading: true;
      id?: number;
      title?: string;
      price?: number;
      category?: string;
      description?: string;
      image?: string;
    }
  | {
      isLoading?: false;
      id: number;
      title: string;
      price: number;
      category: string;
      description: string;
      image: string;
    };

export interface ProductsGalleryProps {
  title: string | undefined;
  products: Product[];
  loading: boolean;
  error: string | null;
}

export interface ProductDetailsCardProps {
  product: Product | null;
  isLoading?: boolean;
}

export interface UseProductsReturn {
  products: Product[];
  loading: boolean;
  error: string | null;
}

export interface UseProductByIdReturn {
  product: Product | null;
  loading: boolean;
  error: string | null;
}

export type Feature = {
  title: string;
  icon: LucideIcon;
};

export interface HighlightedFeaturesProps {
  features: Feature[];
}

export interface UseProductCardProps {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

export type CategoryId =
  | "all"
  | "electronics"
  | "jewelery"
  | "men's clothing"
  | "women's clothing";

export interface Category {
  id: CategoryId;
  name: string;
}

export interface ProductInfoCardProps {
  product: ProductCardProps;
}
