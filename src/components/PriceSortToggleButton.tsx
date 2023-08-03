import { SortType } from '@/types';
import { Stack, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';

interface Props {
  sort: SortType;
  onChangeSort: (sort: SortType) => void;
}

const PriceSortToggleButton: React.FC<Props> = (props: Props) => {
  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newValue: SortType,
  ) => {
    props.onChangeSort(newValue);
  }

  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <Typography>价格：</Typography>
      <ToggleButtonGroup
        value={props.sort}
        exclusive
        onChange={handleChange}
        size="small"
      >
        <ToggleButton value={SortType.ASC} aria-label="Asc">
          按价格升序
        </ToggleButton>
        <ToggleButton value={SortType.DESC} aria-label="Desc">
          按价格降序
        </ToggleButton>
      </ToggleButtonGroup>
    </Stack>
  );
};

export default PriceSortToggleButton;