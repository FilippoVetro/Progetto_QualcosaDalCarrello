import { Product } from "./product.model";

export interface Order {
    id: number;
    product: Product[];
    amount: number;
    refunded: boolean;
    refundCause?: string;
  }