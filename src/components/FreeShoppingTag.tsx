import { Box, Typography } from '@mui/material';

const FreeShippingTag = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        px: 1,
        py: "2px",
        bgcolor: '#000',
        position: "absolute",
        top: 0,
        right: 0,
      }}
    >
      <Typography pt="2px" variant="body2" color="#FFF" fontSize={12}>
        包邮
      </Typography>
    </Box>
  );
}

export default FreeShippingTag;