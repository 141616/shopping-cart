import useCart from '@/hooks/useCart';
import { isOpenCartState } from '@/stores';
import { CartItem } from '@/types';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { Box, Button, Divider, Drawer, IconButton, Stack, TextField, Typography } from '@mui/material';
import Big from 'big.js';
import { useRecoilState } from 'recoil';
import PriceLabel from './PriceLabel';


const TextEllipsisStyle = {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
};

const CartProductItem = ({ data }: { data: CartItem }) => {
  const { removeItemFromCart, updateCartItem } = useCart();
  const handleChangeQuantity: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (+e.target.value >= 0) {
      updateCartItem({
        product: data.product,
        quantity: Math.max(Math.floor(+e.target.value), 1),
        size: data.size,
      });
    }
  }

  const handleRemove = () => {
    removeItemFromCart(data);
  }

  return (
    <Box>
      <Stack spacing={1} direction="row" alignItems="center" justifyContent="space-between">
        <img
          height="400"
          width="276"
          style={{
            width: '80px',
            height: 'auto',
            verticalAlign: 'middle',
            objectFit: 'cover',
          }}
          src={data.product.front}
          alt={data.product.title}
        />
        <Stack sx={{ flex: "auto", overflow: "hidden" }} spacing={0.5}>
          <Typography fontSize={14} fontWeight="bold" sx={TextEllipsisStyle}>
            {data.product.title}
          </Typography>
          <Typography fontSize={12} height={18} color="text.secondary" sx={TextEllipsisStyle}>
            {data.product.description}
          </Typography>
          <Stack direction="row" spacing={1} alignItems="center">
            <PriceLabel price={data.product.price} />
            <Box
              sx={{
                width: 28,
                height: 28,
                borderRadius: "50%",
                bgcolor: "#000",
                color: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography fontSize={12}>{data.size}</Typography>
            </Box>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Typography fontSize={12} color="text.secondary">
              数量:
            </Typography>
            <TextField
              value={data.quantity}
              type="number"
              onChange={handleChangeQuantity}
              size="small"
              sx={{ width: '80px', }}
              InputProps={{
                sx: {
                  height: 28,
                  fontSize: 12,
                }
              }}
            />
          </Stack>
        </Stack>

        <Button
          variant="contained"
          size="small"
          color="error"
          onClick={handleRemove}
        >
          删除
        </Button>
      </Stack>
    </Box>
  );
}

const CartDrawer = () => {
  const [isOpenCart, setIsOpenCart] = useRecoilState(isOpenCartState);
  const { cartList, maxInstallments } = useCart();
  const total = cartList.reduce((pre, cur) => pre + cur.product.price * cur.quantity, 0);

  const handleGoAddCart = () => {
    setIsOpenCart(false);
  }

  const handleCheckout = () => {
    alert("总金额：" + Big(total).toFixed(2));
  }

  return (
    <Drawer anchor='right' open={isOpenCart} onClose={() => setIsOpenCart(false)}>
      <Stack width={360} height="100vh">
        <Stack sx={{ height: 48, px: 2 }} direction="row" alignItems="center" justifyContent="space-between">
          <Typography variant="subtitle1" fontWeight="bold">购物车</Typography>
          <IconButton onClick={() => setIsOpenCart(false)}>
            <CloseRoundedIcon />
          </IconButton>
        </Stack>
        <Divider />
        <Stack p={2} spacing={1} flex="auto">
          {
            cartList.map((item, index) => (
              <CartProductItem key={`${item.product.id}-${index}`} data={item} />
            ))
          }
          {
            cartList.length === 0 && (
              <Stack spacing={1} alignItems="center">
                <Typography variant="h6">Cart is empty</Typography>
                <Button
                  size="small"
                  variant="outlined"
                  onClick={handleGoAddCart}
                >
                  去添加商品
                </Button>
              </Stack>
            )
          }
        </Stack>
        <Box p={2} bgcolor="#e1e3e8" color="#000">
          <Stack spacing={2}>
            <Stack spacing={1} direction="row" alignItems="center" justifyContent="space-between">
              <Typography variant="h6">小计</Typography>
              <Stack alignItems="end" justifyContent="center">
                <Typography variant="h6" fontSize={16}>
                  <span style={{ fontSize: 12 }}>$</span> {Big(total).toFixed(2)}
                </Typography>
                {
                  +maxInstallments > 1 && (
                    <Typography fontSize={12}>
                      或最多 ${Big(total).div(+maxInstallments).toFixed(2)} /月，共 {maxInstallments} 月
                    </Typography>
                  )
                }
              </Stack>
            </Stack>
            <Button onClick={handleCheckout} variant="contained" fullWidth size="small">结算</Button>
          </Stack>
        </Box>
      </Stack>
    </Drawer>
  );
};

export default CartDrawer;
