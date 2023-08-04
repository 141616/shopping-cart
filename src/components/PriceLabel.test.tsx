import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import PriceLabel from './PriceLabel'; // 导入要测试的组件

test('renders the component correctly', () => {
  render(<PriceLabel price={12.1} />);

  const intPrice = screen.getByText('12');
  expect(intPrice).toBeInTheDocument();
  const dotPrice = screen.getByText('.10');
  expect(dotPrice).toBeInTheDocument();
});
