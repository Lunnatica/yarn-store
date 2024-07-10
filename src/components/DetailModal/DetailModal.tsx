import '@reach/dialog/styles.css';

import CloseIcon from '../../icons/close.svg';
import { Product } from '../../types/types';
import { OrderArea } from './components/OrderArea';
import { ProductDescriptionArea } from './components/ProductDescriptionArea';
import {
  StyledButtonWrapper,
  StyledDetailDialogContent,
  StyledDetailDialogOverlay,
  StyledProductTitle,
  StyledTitleWrapper,
} from './StyledDetailModal';

interface DetailModalProps {
  isOpen: boolean;
  onDismiss: () => void;
  product: Product;
}

export const DetailModal: React.FC<DetailModalProps> = ({ isOpen, onDismiss, product }) => {
  return (
    <StyledDetailDialogOverlay isOpen={isOpen} onDismiss={onDismiss}>
      <StyledDetailDialogContent aria-label="Product details">
        <StyledTitleWrapper>
          <StyledProductTitle>{product.name}</StyledProductTitle>
          <StyledButtonWrapper aria-label="Close dialog" onClick={onDismiss}>
            <CloseIcon />
          </StyledButtonWrapper>
        </StyledTitleWrapper>
        <ProductDescriptionArea product={product} />
        <OrderArea product={product} />
      </StyledDetailDialogContent>
    </StyledDetailDialogOverlay>
  );
};
