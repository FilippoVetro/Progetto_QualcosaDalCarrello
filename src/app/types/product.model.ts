export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  rating: number;
  image: string;
  category: string;
  brand: string;
  soldNumber?: number;
}

export interface ProductCart extends Product {
  quantity: number;
}
