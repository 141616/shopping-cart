import FreeShippingTag from '@/components/FreeShoppingTag';
import PriceLabel from '@/components/PriceLabel';
import ProductSizeList from '@/components/ProductSizeList';
import useCart from '@/hooks/useCart';
import { chooseSizeState, isOpenCartState } from '@/stores';
import { IProduct, SizeType } from '@/types';
import { Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import Big from 'big.js';
import { useSetRecoilState } from 'recoil';

const ProductImage = ({ src }: { src: string }) => {
  return (
    <img
      height="400"
      width="276"
      style={{
        width: '100%',
        height: 'auto',
        verticalAlign: 'middle',
        objectFit: 'cover',
      }}
      src={src}
      alt=""
    />
  );
}


const ProductCard = ({ product }: { product: IProduct }) => {
  const setChooseSize = useSetRecoilState(chooseSizeState);
  const setIsOpenCart = useSetRecoilState(isOpenCartState);
  const { addToCart } = useCart();

  const handleClick = (product: IProduct) => {
    // 如果只有一种尺码，则直接加到购物车
    if (product.availableSizes.length === 1) {
      addToCart({
        product,
        size: product.availableSizes[0] as SizeType,
        quantity: 1,
      });
      setIsOpenCart(true);
    } else {
      setChooseSize({
        open: true,
        product: product,
      });
    }
  };

  return (
    <Card
      sx={{
        maxWidth: 345,
        borderRadius: "8px",
        "&:hover #back-img": {
          opacity: 1,
        }
      }}
    >
      <Box position="relative">
        <Box sx={{ opacity: 1 }}>
          <ProductImage src={product.front} />
        </Box>
        <Box
          id="back-img"
          sx={{
            opacity: 0,
            position: "absolute",
            bottom: 0,
            left: 0,
            top: 0,
            right: 0,
            transition: "all 0.5s ease-in-out",
          }}>
          <ProductImage src={product.back} />
        </Box>

        {product.isFreeShipping && <FreeShippingTag />}
        <ProductSizeList sizes={product.availableSizes} />
      </Box>
      <CardContent>
        <Typography
          gutterBottom
          overflow="hidden"
          textAlign="center"
          height={56}
          variant="subtitle1"
          component="div"
        >
          {product.title}
        </Typography>
        <PriceLabel center price={product.price} />
        <Box height={20}>
          {
            product.installments > 1 && (
              <Typography variant="body2" color="text.secondary" textAlign="center">
                或分 {product.installments} 期，每期 ${Big(product.price).div(product.installments).toFixed(2)}
              </Typography>
            )
          }
        </Box>
      </CardContent>
      <CardActions sx={{ p: 2, pt: 0 }}>
        <Button
          fullWidth
          size="small"
          variant="outlined"
          onClick={() => handleClick(product)}
        >
          添加到购物车
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProductCard;