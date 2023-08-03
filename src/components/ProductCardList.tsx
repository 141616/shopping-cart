import ChooseProductSizeDialog from '@/components/ChooseProductSizeDialog';
import ProductCard from '@/components/ProductCard';
import { IProduct } from '@/types';
import { CircularProgress, Grid, Stack } from '@mui/material';

interface Props {
  isLoading: boolean;
  products: IProduct[];
}

const ProductCardList: React.FC<Props> = (props: Props) => {

  if (props.isLoading) {
    return (
      <Stack alignItems="center" py={10}>
        <CircularProgress />
      </Stack>
    );
  }

  return (
    <>
      <Grid container columns={24} spacing={2}>
        {props.products.map((product) => (
          <Grid key={product.id} item xs={12} sm={8} md={6}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
      <ChooseProductSizeDialog />
    </>
  );
};

export default ProductCardList;