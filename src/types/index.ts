export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  dietary: {
    vegetarian: boolean;
    vegan: boolean;
    glutenFree: boolean;
  };
  rating: number;
  preparationTime: number;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface User {
  id: string;
  email: string;
  name: string;
  addresses: Address[];
  orders: Order[];
}

export interface Address {
  id: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  isDefault: boolean;
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'preparing' | 'delivering' | 'delivered';
  createdAt: Date;
  deliveryAddress: Address;
}