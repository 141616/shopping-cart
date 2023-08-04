import { SizeType } from '../types';
import { Box, Checkbox, FormControlLabel, FormGroup, Stack, Typography } from '@mui/material';

const ALLSizeList = [
  SizeType.XS,
  SizeType.S,
  SizeType.M,
  SizeType.ML,
  SizeType.L,
  SizeType.XL,
  SizeType.XXL
]

interface Props {
  filterSizes: Array<SizeType>;
  onChangeSizes: (sizes: Array<SizeType>) => void;
}

const SizesCheck: React.FC<Props> = (props: Props) => {
  const handleChange = (size: SizeType) => () => {
    if (props.filterSizes.includes(size)) {
      props.onChangeSizes(props.filterSizes.filter(s => s !== size))
    } else {
      props.onChangeSizes([...props.filterSizes, size]);
    }
  };

  return (
    <Box>
      <Stack direction="row" alignItems="center" spacing={1}>
        <Typography>尺寸：</Typography>
        <FormGroup row>
          {
            ALLSizeList.map((size) => {
              const checked = props.filterSizes.includes(size);
              return (
                <FormControlLabel
                  key={size}
                  control={<Checkbox onChange={handleChange(size)} checked={checked} color="primary" />}
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