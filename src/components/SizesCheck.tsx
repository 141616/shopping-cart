import { Box, Checkbox, FormControlLabel, FormGroup, FormLabel, Stack } from '@mui/material';
import { useState } from 'react';

interface Props { }

enum SizeType {
  XS = "XS",
  S = "S",
  M = "M",
  ML = "ML",
  L = "L",
  XL = "XL",
  XXL = "XXL"
}

const ALLSizeList = [
  SizeType.XS,
  SizeType.S,
  SizeType.M,
  SizeType.ML,
  SizeType.L,
  SizeType.XL,
  SizeType.XXL
]

const SizesCheck: React.FC<Props> = (props: Props) => {
  const [sizes, setSizes] = useState<SizeType[]>([]);

  const handleChange = (size: SizeType) => {
    if (sizes.includes(size)) {
      setSizes(sizes.filter(s => s !== size));
    } else {
      setSizes([...sizes, size]);
    }
  };

  return (
    <Box>
      <Stack direction="row" alignItems="center" spacing={1}>
        <FormLabel component="legend">尺寸： </FormLabel>
        <FormGroup row>
          {
            ALLSizeList.map((size) => {
              return (
                <FormControlLabel
                  key={size}
                  control={<Checkbox onChange={() => handleChange(size)} checked={sizes.includes(size)} color="primary" />}
                  label={size}
                />
              )
            })
          }
        </FormGroup>
      </Stack>
    </Box>
  );
};

export default SizesCheck;