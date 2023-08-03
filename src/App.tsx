import CartButton from '@/components/CartButton';
import PriceSortToggleButton from '@/components/PriceSortToggleButton';
import ProductCardList from '@/components/ProductCardList';
import SizesCheck from '@/components/SizesCheck';
import { AppBar, Box, Container, Stack, Toolbar, Typography } from '@mui/material';
import useProducts from './hooks';

function App() {
  const { products, isLoading } = useProducts();
  return (
    <Box pt={{ xs: 7, md: 8 }} bgcolor="#f3f3f3" minHeight="100vh">
      <AppBar position="fixed" sx={{ bgcolor: "#000" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h6" noWrap component="div">
            Products
          </Typography>
          <CartButton />
        </Toolbar>
      </AppBar>
      <Container>
        <Box py={4}>
          <Stack spacing={1}>
            <SizesCheck />
            <PriceSortToggleButton />
            <Box pt={1}>
              <ProductCardList isLoading={isLoading} products={products} />
            </Box>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}

export default App;
