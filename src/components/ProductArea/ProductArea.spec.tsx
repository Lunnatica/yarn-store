import { render, screen, waitFor } from '@testing-library/react';

import { ProductArea } from './ProductArea';
import { act } from 'react-dom/test-utils';

jest.mock('../DetailModal', () => ({
  DetailModal: () => <div data-testid="detail-modal" />,
}));
jest.mock('../ProductList', () => ({
  ProductList: () => <div data-testid="product-list" />,
}));
jest.mock('../SearchBar', () => ({
  SearchBar: () => <div data-testid="search-bar" />,
}));

describe('ProductArea', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
    fetchMock.mockResponseOnce(JSON.stringify([]));
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should match the snapshot', async () => {
    let container = null;
    await act(async () => {
      ({ container } = render(<ProductArea />));
    });
    expect(container).toMatchSnapshot();
  });

  it('should call fetchProducts on mount', async () => {
    render(<ProductArea />);
    await waitFor(() => {
      expect(fetchMock).toHaveBeenCalledTimes(1);
    });
  });
});
