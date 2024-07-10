import { render, screen } from '@testing-library/react';
import { SearchBar } from './SearchBar';

jest.mock('../../icons/search.svg', () => ({
  __esModule: true,
  default: () => 'test-icon',
}));

describe('SearchBar', () => {
  it('should render the SearchBar component', () => {
    render(<SearchBar fetchProducts={jest.fn()} />);
    const searchField = screen.getByPlaceholderText('Search products by name');
    expect(searchField);
  });
});
