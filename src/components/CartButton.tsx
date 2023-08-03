import useCart from '@/hooks/useCart';
import { isOpenCartState } from '@/stores';
import { Box, Button, Typography } from '@mui/material';
import { useSetRecoilState } from 'recoil';
import CartDrawer from './CartDrawer';
import MyIcon from './MyIcon';

interface Props { }

const CountTag = ({ count }: { count: number }) => {
  if (count <= 0) {
    return <Box></Box>;
  }

  return (
    <Box
      top={-4}
      right={-4}
      position="absolute"
      display="flex"
      alignItems="center"
      justifyContent="center"
      width={16}
      height={16}
      bgcolor="error.main"
      color="white"
      borderRadius="50%"
    >
      <Typography sx={{ transform: "scale(0.8)" }} color="white" fontSize={9}>
        {count > 99 ? `99+` : count}
      </Typography>
    </Box>
  );
}

const CartButton: React.FC<Props> = (props: Props) => {
  const { cartList } = useCart();
  const setIsOpenCartDrawer = useSetRecoilState(isOpenCartState);
  const count = cartList.reduce((acc, item) => acc + item.quantity, 0);

  const handleClick = () => setIsOpenCartDrawer(true);

  return (
    <>
      <Button onClick={handleClick} color="success" variant="text">
        <Box display="flex" alignItems="center" position="relative">
          {/* <ShoppingCartRoundedIcon /> */}
          <MyIcon name="cart" size={24} />
          <CountTag count={count} />
        </Box>
      </Button>
      <CartDrawer />
    </>
  );
};

export default CartButton;