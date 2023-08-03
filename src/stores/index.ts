import { CartItem, IProduct } from "@/types";
import { atom } from "recoil";

interface ChooseSizeState {
  open: boolean;
  product: IProduct | null;
}

export const chooseSizeState = atom<ChooseSizeState>({
  key: "chooseSizeState",
  default: {
    open: false,
    product: null,
  },
});

export const cartState = atom<CartItem[]>({
  key: "cartState",
  default: [],
});

export const isOpenCartState = atom<boolean>({
  key: "isOpenCartState",
  default: false,
});
