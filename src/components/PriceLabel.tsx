import { Typography } from '@mui/material';
import Big from 'big.js';

interface Props {
  price: number;
}

const PriceLabel: React.FC<Props> = (props: Props) => {
  const priceStr = Big(props.price).toFixed(2);
  const [intStr, dotStr] = priceStr.toString().split('.');
  return (
    <Typography variant="body2" textAlign="center">
      <span style={{ marginRight: 4 }}>$</span>
      <span style={{ fontSize: 24, fontWeight: 700 }}>{intStr}</span>
      .{dotStr}
    </Typography>
  );
};

export default PriceLabel;