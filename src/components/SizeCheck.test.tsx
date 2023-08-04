import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import SizesCheck from './SizesCheck';
import { SizeType } from '../types';

test('测试 SizeCheck 组件渲染正常', () => {
  const filterSizes: Array<SizeType> = [SizeType.XS, SizeType.M];
  const onChangeSizes = jest.fn();

  render(<SizesCheck filterSizes={filterSizes} onChangeSizes={onChangeSizes} />);

  const xsCheckbox = screen.getByLabelText(SizeType.XS);
  const mCheckbox = screen.getByLabelText(SizeType.M);

  expect(xsCheckbox).toBeInTheDocument();
  expect(xsCheckbox).toBeChecked();
  expect(mCheckbox).toBeInTheDocument();
  expect(mCheckbox).toBeChecked();
});

test('测试 SizeCheck 组件点击事件', () => {
  let filterSizes: Array<SizeType> = [];
  const onChangeSizes = jest.fn();

  render(<SizesCheck filterSizes={filterSizes} onChangeSizes={onChangeSizes} />);

  const xsCheckbox = screen.getByLabelText(SizeType.XS);
  const xlCheckbox = screen.getByLabelText(SizeType.XL);

  fireEvent.click(xsCheckbox);
  expect(onChangeSizes).toHaveBeenCalledWith([SizeType.XS]);
  // control 类型组件，这里手动添加到 filterSizes
  filterSizes.push(SizeType.XS);

  fireEvent.click(xlCheckbox);
  expect(onChangeSizes).toHaveBeenCalledWith([SizeType.XS, SizeType.XL]);

  expect(onChangeSizes).toHaveBeenCalledTimes(2);
});
