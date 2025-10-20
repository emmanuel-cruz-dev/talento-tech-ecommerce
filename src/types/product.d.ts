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

export interface ProductCardProps {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  isLoading?: boolean;
}

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
