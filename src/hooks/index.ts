import MOCK_PRODUCTS from "@/mocks";
import { IProduct } from "@/types";
import { fetchWithTimeout } from "@/utils/Request";
import { useState } from "react";

const url = "https://www.fastmock.site/mock/bd045a8117f6016c940aa942b9c0641b/api/products";

const useProducts = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchProducts = async (params: {
    sort?: string;
    filter?: string;
    page?: number;
    pageSize?: number;
  }) => {
    try {
      let _url = url;
      for (const key in params) {
        if (Object.prototype.hasOwnProperty.call(params, key)) {
          const element = (params as any)[key];
          if (element) {
            _url += _url.includes("?") ? `&${key}=${element}` : `?${key}=${element}`;
          }
        }
      }
      const res = await fetchWithTimeout(_url, 3 * 1000);
      console.log(res);
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

  return {
    products,
    setProducts,
    fetchProducts,
    isLoading,
  };
};

export default useProducts;
