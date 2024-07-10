import { render, screen } from '@testing-library/react';

import { mockProducts } from '../../test/mocks';
import { ProductListState } from '../ProductArea/ProductArea';
import { ProductList } from './ProductList';

jest.mock('../SkeletonLoader', () => ({
  SkeletonLoader: () => <div data-testid="skeleton-loader"></div>,
}));

const mockProductListState: ProductListState = 'loaded';
const mockOpenModal = jest.fn();

const renderProductList = (
  products = mockProducts,
  productListState = mockProductListState as ProductListState,
  openModal = mockOpenModal
) => {
  render(
    <ProductList products={products} productListState={productListState} openModal={openModal} />
  );
};

describe('ProductList', () => {
  describe('when the product list is loaded', () => {
    it('should render all the products', () => {
      renderProductList();
      mockProducts.forEach((product) => {
        expect(screen.getByText(product.name));
      });
    });

    it('should call the openModal function when ProductCard is clicked', () => {
      renderProductList();
      screen.getByText(mockProducts[0].name).click();
      expect(mockOpenModal).toHaveBeenCalledWith(mockProducts[0]);
    });

    it('should not render the skeleton loader', () => {
      renderProductList();
      expect(screen.queryByTestId('skeleton-loader')).toBeNull();
    });

    it('should not render the user message', () => {
      renderProductList();
      expect(screen.queryByText('There are no products to show.')).toBeNull();
    });

    it('should not render the error message', () => {
      renderProductList();
      expect(
        screen.queryByText(
          'There was an issue retrieving the products. Refresh the page to try again'
        )
      ).toBeNull();
    });
  });

  describe('when the product list is loading', () => {
    it('should render an SkeletonLoader component', () => {
      renderProductList(mockProducts, 'loading');
      expect(screen.getByTestId('skeleton-loader'));
    });
  });

  describe('when the product list is empty', () => {
    it('should render a user message', () => {
      renderProductList([], 'empty');
      expect(screen.getByText('There are no products to show.'));
    });
  });

  describe('when there is an error fetching the product list', () => {
    it('should show an error to the user', () => {
      renderProductList([], 'error');
      expect(
        screen.getByText(
          'There was an issue retrieving the products. Refresh the page to try again'
        )
      );
    });
  });
});
