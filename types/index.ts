export interface ICraft {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  stock: number;
}

export interface ICraftState {
  crafts: ICraft[];
  craft: ICraft | null;
  loading: boolean;
  error: string | null;
}

export interface ICartItem extends ICraft {
  quantity: number;
}

export interface ICartState {
  cartItems: ICartItem[];
  totalPrice: number;
}

export interface IOrderState {
  loading: boolean;
  error: string | null;
}
