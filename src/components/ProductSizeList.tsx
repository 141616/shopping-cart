import { Box, Stack, Typography } from '@mui/material';


const ProductSizeList = ({ sizes }: { sizes: string[] }) => {
  return (
    <Box
      sx={{
        position: "absolute",
        bottom: 0,
        left: 0,
        p: 1.5,
      }}
    >
      <Stack direction="row" spacing={1}>
        {
          sizes.map((size, index) => {
            return (
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  bgcolor: '#000',
                  color: "white",
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  overflow: "hidden",
                }}
                boxShadow={2}
                key={index}
              >
                <Typography fontSize={12} fontWeight="bold">
                  {size}
                </Typography>
              </Box>
            );
          })
        }
      </Stack>
    </Box>
  );
}

export default ProductSizeList;