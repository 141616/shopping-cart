import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import PriceSortToggleButton from './PriceSortToggleButton';
import { SortType } from '../types';

test('renders PriceSortToggleButton component correctly', () => {
  const sort = SortType.ASC;
  const onChangeSort = jest.fn();

  render(<PriceSortToggleButton sort={sort} onChangeSort={onChangeSort} />);

  const ascToggleButton = screen.getByLabelText('Asc');
  const descToggleButton = screen.getByLabelText('Desc');

  expect(ascToggleButton).toBeInTheDocument();
  expect(ascToggleButton).toHaveClass('Mui-selected');
  expect(descToggleButton).toBeInTheDocument();
  expect(descToggleButton).not.toHaveClass('Mui-selected');
});

test('clicking on toggle buttons triggers onChangeSort callback', () => {
  const sort = SortType.ASC;
  const onChangeSort = jest.fn();

  render(<PriceSortToggleButton sort={sort} onChangeSort={onChangeSort} />);

  const descToggleButton = screen.getByLabelText('Desc');

  fireEvent.click(descToggleButton);

  expect(onChangeSort).toHaveBeenCalledTimes(1);
  expect(onChangeSort).toHaveBeenCalledWith(SortType.DESC);
});
