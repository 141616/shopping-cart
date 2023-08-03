import MOCK_PRODUCTS from "@/mocks";
import { IProduct } from "@/types";
import { fetchWithTimeout } from "@/utils/Request";
import { useEffect, useState } from "react";

const useProducts = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const init = async () => {
      try {
        const url = "https://www.fastmock.site/mock/bd045a8117f6016c940aa942b9c0641b/api/products";
        const res = await fetchWithTimeout(url, 3 * 1000);
        if (res?.data && Array.isArray(res.data)) {
          setProducts(res.data);
        }
      } catch (error) {
        console.log(error);
        // use mock
        setProducts(MOCK_PRODUCTS);
      } finally {
        setIsLoading(false);
      }
    };
    init();
  }, []);
  return {
    products,
    setProducts,
    isLoading,
  };
};

export default useProducts;
