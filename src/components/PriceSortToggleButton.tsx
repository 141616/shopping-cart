import { Stack, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import { useState } from 'react';

interface Props { }

const PriceSortToggleButton: React.FC<Props> = (props: Props) => {
  const [sort, setSort] = useState<"asc" | "desc">('desc');
  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newValue: "asc" | "desc",
  ) => {
    setSort(newValue);
  }
  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <Typography>价格：</Typography>
      <ToggleButtonGroup
        value={sort}
        exclusive
        onChange={handleChange}
        size="small"
      >
        <ToggleButton value="asc" aria-label="Asc">
          按价格升序
        </ToggleButton>
        <ToggleButton value="desc" aria-label="desc">
          按价格降序
        </ToggleButton>
      </ToggleButtonGroup>
    </Stack>
  );
};

export default PriceSortToggleButton;