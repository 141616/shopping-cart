export interface IProduct {
  availableSizes: string[];
  id: number;
  installments: number;
  isFreeShipping: boolean;
  price: number;
  style: string;
  title: string;
  front: string;
  back: string;
  description: string;
}

export enum SizeType {
  XS = "XS",
  S = "S",
  M = "M",
  ML = "ML",
  L = "L",
  XL = "XL",
  XXL = "XXL",
}

export interface CartItem {
  product: IProduct;
  quantity: number;
  size: SizeType;
}
