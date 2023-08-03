import { cartState } from "@/stores";
import { CartItem } from "@/types";
import { useRecoilState } from "recoil";

const findCartItem = (item: CartItem) => (i: CartItem) =>
  item.product.id === i.product.id && item.size === i.size;

const findMaxInstallments = (list: CartItem[]) => {
  let maxInstallments = 0;
  list.forEach((item) => {
    if (item.product.installments > maxInstallments) {
      maxInstallments = item.product.installments;
    }
  });
  return maxInstallments;
};

const useCart = () => {
  const [cartList, setCartList] = useRecoilState(cartState);
  const maxInstallments = findMaxInstallments(cartList);

  const addToCart = (item: CartItem) => {
    // 找到是否已经添加过同种类型的商品
    const currentProduct = cartList.find(findCartItem(item));

    // 存在则数量 + item.quantity
    if (currentProduct) {
      setCartList(
        cartList.map((i) =>
          i.product.id === currentProduct.product.id
            ? { ...i, quantity: i.quantity + item.quantity }
            : i
        )
      );
    } else {
      // 不存在则新增一条
      setCartList([...cartList, item]);
    }
  };

  const updateCartItem = (item: CartItem) => {
    setCartList(
      cartList.map((i) => (findCartItem(item)(i) ? { ...i, quantity: item.quantity } : i))
    );
  };

  const removeItemFromCart = (item: CartItem) => {
    setCartList(cartList.filter((i) => !findCartItem(item)(i)));
  };

  const removeFromCart = (item: CartItem) => {
    const currentProduct = cartList.find(findCartItem(item));
    if (currentProduct) {
      const newQuantity = currentProduct.quantity - item.quantity;
      if (newQuantity <= 0) {
        removeItemFromCart(currentProduct);
      } else {
        setCartList(
          cartList.map((i) =>
            i.product.id === currentProduct.product.id
              ? {
                  ...i,
                  quantity: newQuantity,
                }
              : i
          )
        );
      }
    } else {
      removeItemFromCart(item);
    }
  };

  return {
    addToCart,
    removeFromCart,
    removeItemFromCart,
    updateCartItem,
    cartList,
    maxInstallments,
  };
};

export default useCart;
