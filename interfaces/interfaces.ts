export interface Product {
  _id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  image: string;
  color?: string[];
  size?: string[];
  discount?: number;
  isOffer?: boolean;
  isPopular?: boolean;
  onSale?: boolean;
  selected: boolean;
}
