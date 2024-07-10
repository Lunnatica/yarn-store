import Image from 'next/image';
import { RichText } from 'prismic-reactjs';

import { Product } from '../../../../types/types';
import {
  StyledProductDescription,
  StyledProductDetailLine,
  StyledProductDetailLineTitle,
  StyledProductDetailLineWrapper,
  StyledTextWrapper,
} from './StyledProductDescriptionArea';

interface ProductDescriptionAreaProps {
  product: Product;
}

export const ProductDescriptionArea: React.FC<ProductDescriptionAreaProps> = ({ product }) => (
  <StyledProductDescription>
    <div>
      <Image src={product.image.src} alt="" width={325} height={325} layout="responsive" />
    </div>
    <StyledTextWrapper>
      <StyledProductDetailLineWrapper>
        <StyledProductDetailLine>
          <StyledProductDetailLineTitle>Stock: </StyledProductDetailLineTitle>
          {product.stock ? product.stock : 0}
        </StyledProductDetailLine>
        <StyledProductDetailLine>
          <StyledProductDetailLineTitle>Size:</StyledProductDetailLineTitle> {product.size}
        </StyledProductDetailLine>
      </StyledProductDetailLineWrapper>
      {product.description && <RichText render={product.description} />}
    </StyledTextWrapper>
  </StyledProductDescription>
);
