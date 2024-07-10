import { Product } from '../../types/types';
import {
  StyledClickableCard,
  StyledImage,
  StyledNewTag,
  StyledProductCardArticle,
  StyledProductCardLi,
  StyledProductDetailLine,
  StyledProductDetailLineTitle,
  StyledProductInfo,
  StyledProductTitle,
} from './StyledProductCard';

interface ProductCardProps {
  product: Product;
  openModal: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, openModal }) => {
  return (
    <StyledProductCardLi>
      <StyledProductCardArticle>
        <StyledClickableCard onClick={() => openModal(product)}>
          <StyledImage src={product.image} alt={product.name} width={298} height={298} />
          {product.new && <StyledNewTag>New</StyledNewTag>}
          <StyledProductInfo>
            <header>
              <StyledProductTitle>{product.name}</StyledProductTitle>
            </header>
            <StyledProductDetailLine>
              <StyledProductDetailLineTitle>Size: </StyledProductDetailLineTitle>
              {product.size}
            </StyledProductDetailLine>
            <StyledProductDetailLine>
              <StyledProductDetailLineTitle>Stock: </StyledProductDetailLineTitle>
              {product.stock}
            </StyledProductDetailLine>
          </StyledProductInfo>
        </StyledClickableCard>
      </StyledProductCardArticle>
    </StyledProductCardLi>
  );
};
