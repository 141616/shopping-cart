import FreeShippingTag from '@/components/FreeShoppingTag';
import PriceLabel from '@/components/PriceLabel';
import ProductSizeList from '@/components/ProductSizeList';
import { IProduct } from '@/types';
import { Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material';


const ProductCard = ({ product }: { product: IProduct }) => {
  return (
    <Card sx={{ maxWidth: 345, borderRadius: "8px" }}>
      <Box position="relative">
        <img
          height="400"
          width="276"
          style={{
            width: '100%',
            height: 'auto',
            verticalAlign: 'middle',
            objectFit: 'cover',
          }}
          src={product.front}
          alt=""
        />
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
        <PriceLabel price={product.price} />
      </CardContent>
      <CardActions sx={{ p: 2 }}>
        <Button fullWidth size="small" variant="outlined">添加到购物车</Button>
      </CardActions>
    </Card>
  );
}
export default ProductCard;