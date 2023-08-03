import { cartState } from '@/stores';
import { LocalStorageHelper } from '@/utils/LocalStorage';
import { Box } from '@mui/material';
import { useEffect, useRef } from 'react';
import { useRecoilState } from 'recoil';

interface Props {
  children: React.ReactNode;
}

const LocalStorageContainer: React.FC<Props> = (props: Props) => {
  const [cartList, setCartList] = useRecoilState(cartState);
  const isInitRef = useRef<boolean>(false);

  // 初始化时获取本地存储数据
  useEffect(() => {
    const list = LocalStorageHelper.getCartList();
    isInitRef.current = true;
    setCartList(list);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 本地持久化
  useEffect(() => {
    // 只有初始化之后才能做更新
    if (isInitRef.current) {
      LocalStorageHelper.saveCartList(cartList);
    }
  }, [cartList]);

  return <Box>{props.children}</Box>;
};

export default LocalStorageContainer;