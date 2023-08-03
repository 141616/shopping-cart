import { CartItem } from "@/types";

const CART_KEY = "cartList";

export const LocalStorageHelper = {
  saveCartList: (cartList: CartItem[]) => {
    localStorage.setItem("cartList", JSON.stringify(cartList));
  },
  getCartList: () => {
    const res = localStorage.getItem(CART_KEY);
    if (!res) {
      return [];
    }

    try {
      return JSON.parse(res) as CartItem[];
    } catch (error) {
      return [];
    }
  },
};
