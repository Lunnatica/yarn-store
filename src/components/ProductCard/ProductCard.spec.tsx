import { render, screen } from '@testing-library/react';

import { mockProducts } from '../../test/mocks';
import { ProductCard } from './ProductCard';

const mockOpenModal = jest.fn();

describe('ProductCard', () => {
  it('should render the ProductCard component', () => {
    render(<ProductCard product={mockProducts[0]} openModal={mockOpenModal} />);
    expect(screen.getByText(mockProducts[0].name));
    expect(screen.getByText(mockProducts[0].size));
    expect(screen.getByText(mockProducts[0].stock));
    expect(screen.queryByText('New')).toBeNull();
  });

  it('should not render New tag if product is not new', () => {
    render(<ProductCard product={{ ...mockProducts[0], new: false }} openModal={mockOpenModal} />);
  });

  it('should render New tag if product is new', () => {
    render(<ProductCard product={{ ...mockProducts[0], new: true }} openModal={mockOpenModal} />);
    expect(screen.getByText('New'));
  });

  it('should call setSelectedProduct and setOpen when clicked', () => {
    render(<ProductCard product={mockProducts[0]} openModal={mockOpenModal} />);
    screen.getByText(mockProducts[0].name).click();
    expect(mockOpenModal).toHaveBeenCalledWith(mockProducts[0]);
  });
});
