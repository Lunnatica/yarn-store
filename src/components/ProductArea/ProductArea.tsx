import { useCallback, useEffect, useState } from 'react';

import { Product } from '../../types/types';
import { DetailModal } from '../DetailModal';
import { ProductList } from '../ProductList';
import { SearchBar } from '../SearchBar';

export type ProductListState = 'loading' | 'loaded' | 'error' | 'empty';

export const ProductArea: React.FC = () => {
  const [isOpen, setOpen] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product>(null);
  const [productListState, setProductListState] = useState<ProductListState>('loading');

  const openModal = useCallback(
    (product: Product) => {
      setSelectedProduct(product);
      setOpen(true);
    },
    [setSelectedProduct, setOpen]
  );

  const fetchProducts = async (query?: string) => {
    try {
      setProductListState('loading');
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_HOST}/products${query ? `?name_like=${query}` : ''}`
      );
      if (!response.ok) {
        setProductListState('error');
      }
      const data = await response.json();
      setProducts(data);
      if (data.length === 0) {
        setProductListState('empty');
      } else {
        setProductListState('loaded');
      }
    } catch (error) {
      setProductListState('error');
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <SearchBar fetchProducts={fetchProducts} />

      <ProductList products={products} productListState={productListState} openModal={openModal} />

      {selectedProduct && (
        <DetailModal product={selectedProduct} isOpen={isOpen} onDismiss={() => setOpen(false)} />
      )}
    </>
  );
};
