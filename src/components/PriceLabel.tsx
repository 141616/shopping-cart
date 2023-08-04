import { Typography } from '@mui/material';
import Big from 'big.js';

interface Props {
  price: number;
  center?: boolean;
}

const PriceLabel: React.FC<Props> = (props: Props) => {
  const priceStr = Big(props.price).toFixed(2);
  const [intStr, dotStr] = priceStr.toString().split('.');
  return (
    <Typography role="price" variant="body2" textAlign={props.center ? "center" : 'start'}>
      <span style={{ marginRight: 4 }}>$</span>
      <span className='price-main' style={{ fontSize: 24, fontWeight: 700 }}>{intStr}</span>
      .{dotStr}
    </Typography>
  );
};

export default PriceLabel;