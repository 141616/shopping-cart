import useCart from '@/hooks/useCart';
import { chooseSizeState, isOpenCartState } from '@/stores';
import { SizeType } from '@/types';
import { Box, Button, Chip, Dialog, DialogTitle, Stack } from '@mui/material';
import { useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';

interface Props { }

const ChooseProductSizeDialog: React.FC<Props> = (props: Props) => {
  const [chooseSize, setChooseSize] = useRecoilState(chooseSizeState);
  const [choosedSize, setChoosedSize] = useState<SizeType | null>(null);
  const setOpenCartDialog = useSetRecoilState(isOpenCartState);
  const { addToCart } = useCart();

  const isSubmitDisable = choosedSize === null;

  const handleCloseDialog = () => {
    setChooseSize({
      open: false,
      product: null,
    });
    setChoosedSize(null);
  }

  const handleSubmit = () => {
    if (isSubmitDisable || !chooseSize.product) {
      return;
    }
    addToCart({
      product: chooseSize.product,
      size: choosedSize,
      quantity: 1,
    });
    handleCloseDialog();
    setOpenCartDialog(true);
  }

  return (
    <Dialog open={chooseSize.open} onClose={handleCloseDialog}>
      <DialogTitle>选择尺码</DialogTitle>
      <Box minWidth={300} px={2} pb={3}>
        <Stack spacing={1} direction="row">
          {chooseSize.product?.availableSizes.map((size) => (
            <Chip
              key={size}
              variant="filled"
              color={choosedSize === size ? 'primary' : 'default'}
              onClick={() => setChoosedSize(size as SizeType)}
              label={size}
            />
          ))}
        </Stack>
        <Stack mt={4} justifyContent="end" spacing={1} direction="row">
          <Button onClick={handleCloseDialog} variant="outlined" size="small">取消</Button>
          <Button
            onClick={handleSubmit}
            disabled={isSubmitDisable}
            variant="contained"
            size="small"
          >
            确定
          </Button>
        </Stack>
      </Box>
    </Dialog>
  );
};

export default ChooseProductSizeDialog;