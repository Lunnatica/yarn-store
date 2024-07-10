import React, { memo } from 'react';

import { Product } from '../../types/types';
import { ProductListState } from '../ProductArea/ProductArea';
import { ProductCard } from '../ProductCard';
import { SkeletonLoader } from '../SkeletonLoader';
import { UserMessage } from '../UserMessage';
import { StyledProductList } from './StyledProductList';
import { StyledVisuallyHiddenH2 } from '../StyledVisuallyHiddenComponents';

interface ProductListProps {
  openModal: (product: Product) => void;
  products: Product[];
  productListState: ProductListState;
}

export const ProductList: React.FC<ProductListProps> = memo(
  ({ openModal, products, productListState }) => {
    const LoadedProductList: React.FC = () => (
      <StyledProductList>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} openModal={openModal} />
        ))}
      </StyledProductList>
    );

    const LoadingProductList: React.FC = () => (
      <StyledProductList>
        <SkeletonLoader />
      </StyledProductList>
    );

    return (
      <section aria-labelledby="product-list-heading">
        <StyledVisuallyHiddenH2 id="product-list-heading">Product List</StyledVisuallyHiddenH2>
        <UserMessage
          type="info"
          message={productListState === 'empty' ? 'There are no products to show.' : ''}
        />
        <UserMessage
          type="error"
          message={
            productListState === 'error'
              ? 'There was an issue retrieving the products. Refresh the page to try again'
              : ''
          }
        />
        {productListState === 'loading' ? (
          <LoadingProductList />
        ) : productListState === 'loaded' ? (
          <LoadedProductList />
        ) : null}
      </section>
    );
  }
);

ProductList.displayName = 'ProductList';
