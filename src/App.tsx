import CartButton from '@/components/CartButton';
import LocalStorageContainer from '@/components/LocalStorageContainer';
import PriceSortToggleButton from '@/components/PriceSortToggleButton';
import ProductCardList from '@/components/ProductCardList';
import SizesCheck from '@/components/SizesCheck';
import useProducts from '@/hooks';
import { SizeType, SortType } from '@/types';
import { AppBar, Box, Container, Stack, Toolbar, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

function App() {
  const { products, isLoading, fetchProducts } = useProducts();
  const [filterSizeList, setFilterSizeList] = useState<SizeType[]>([]);
  const [sort, setSort] = useState<SortType>(SortType.DESC);

  // 筛选
  useEffect(() => {
    fetchProducts({
      sort,
      filter: filterSizeList.join(","),
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sort, filterSizeList]);

  return (
    <LocalStorageContainer>
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
              <SizesCheck filterSizes={filterSizeList} onChangeSizes={(val) => setFilterSizeList(val)} />
              <PriceSortToggleButton sort={sort} onChangeSort={(v) => setSort(v)} />
              <Box pt={1}>
                <ProductCardList isLoading={isLoading} products={products} />
              </Box>
            </Stack>
          </Box>
        </Container>
      </Box>
    </LocalStorageContainer>
  );
}

export default App;
