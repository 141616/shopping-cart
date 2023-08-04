import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import MyIcon from './MyIcon';

test('renders the component correctly', () => {
  render(<MyIcon name="cart" size={20} />);

  const svgElement = screen.getByTestId('icon');
  expect(svgElement).toBeInTheDocument();
  expect(svgElement).toHaveStyle('width: 20px; height: 20px;');
});
