export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export interface CustomerInfo {
  name: string;
  email: string;
  phone: string;
  address: string;
  specialInstructions?: string;
}

export interface Order {
  id: string;
  items: CartItem[];
  customerInfo: CustomerInfo;
  totalAmount: number;
  timestamp: Date;
  status: 'pending' | 'confirmed' | 'preparing' | 'delivered';
}