import MOCK_PRODUCTS from "@/mocks";
import { IProduct } from "@/types";
import { fetchWithTimeout, generateURLWithParams } from "@/utils/Request";
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
      setIsLoading(true);
      let _url = generateURLWithParams(url, params);
      const res = await fetchWithTimeout(_url, 3 * 1000);
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
