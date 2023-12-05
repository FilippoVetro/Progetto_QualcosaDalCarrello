export interface Order {
    id: number;
    amount: number;
    refunded: boolean;
    refundCause?: string;
  }