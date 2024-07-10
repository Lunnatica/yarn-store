import { ChangeEvent, useState } from 'react';

import { Product } from '../../../../types/types';
import {
  StyledInputsAreaWrapper,
  StyledOrderArea,
  StyledOrderButton,
  StyledOrderButtonWrapper,
  StyledStockInput,
  StyledUserInputTitle,
  StyledStockLabel,
  StyledInputWrapper,
  StyledSelect,
  StyledUserMessage,
} from './StyledOrderArea';

interface OrderAreaProps {
  product: Product;
}

type OrderState = 'initial' | 'loading' | 'error' | 'success';

const COLORS = ['Red', 'Blue', 'Green', 'Yellow'];

const OrderStateMessage: React.FC<{ state: OrderState }> = ({ state }) => {
  let finalMessage = '';
  switch (state) {
    case 'loading':
      finalMessage = 'Placing order...';
      break;
    case 'error':
      finalMessage = 'Failed to place order. Please try again later.';
      break;
    case 'success':
      finalMessage = 'Order placed successfully 🎉';
      break;
    default:
      return null;
  }

  return <StyledUserMessage message={finalMessage} type="info" />;
};

export const OrderArea: React.FC<OrderAreaProps> = ({ product }) => {
  const [orderAmount, setOrderAmount] = useState<number | ''>(0);
  const [orderState, setOrderState] = useState<OrderState>('initial');
  const [optionSelected, setOptionSelected] = useState<string>('blue');

  const handleOrderInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setOrderState('initial');

    if (e.target.value === '') {
      setOrderAmount('');
      return;
    }

    const enteredValue = e.target.value;
    const numberValue = parseInt(enteredValue);

    if (numberValue <= 0) {
      setOrderAmount(0);
    } else if (numberValue > product.stock) {
      setOrderAmount(product.stock);
    } else {
      setOrderAmount(numberValue);
    }
  };

  const handleOrderInputFocus = () => {
    if (orderAmount === 0) {
      setOrderAmount('');
    }
  };

  const handleColorChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setOrderState('initial');
    setOptionSelected(e.target.value);
  };

  const handlePlaceOrderClick = async () => {
    try {
      setOrderState('loading');
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/orders`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          productId: product.id,
          amount: orderAmount,
          color: optionSelected,
        }),
      });

      if (response.ok) {
        setOrderAmount(0);
        setOrderState('success');
      }
    } catch (error) {
      setOrderState('error');
    }
  };

  return product.stock ? (
    <StyledOrderArea>
      <StyledInputsAreaWrapper>
        <StyledInputWrapper>
          <StyledUserInputTitle>Amount: </StyledUserInputTitle>
          <StyledStockInput
            type="number"
            inputMode="numeric"
            pattern="[0-9]*"
            id="orderamount"
            name="orderamount"
            value={orderAmount}
            min={0}
            max={product.stock}
            disabled={orderState === 'loading'}
            onChange={handleOrderInputChange}
            onFocus={handleOrderInputFocus}
          />
          <StyledStockLabel htmlFor="orderamount">
            How many items you want to order
          </StyledStockLabel>
        </StyledInputWrapper>
        <StyledInputWrapper>
          <StyledUserInputTitle>Color: </StyledUserInputTitle>
          <StyledSelect
            disabled={orderState === 'loading'}
            id="selectedcolor"
            value={optionSelected}
            onChange={handleColorChange}
          >
            {COLORS.map((color) => (
              <option key={color} value={color}>
                {color}
              </option>
            ))}
          </StyledSelect>
          <StyledStockLabel htmlFor="selectedcolor">Desired item color</StyledStockLabel>
        </StyledInputWrapper>
      </StyledInputsAreaWrapper>
      <StyledOrderButtonWrapper>
        <StyledOrderButton
          onClick={handlePlaceOrderClick}
          type="button"
          disabled={!orderAmount || orderState === 'loading'}
        >
          Place order
        </StyledOrderButton>
        <OrderStateMessage state={orderState} />
      </StyledOrderButtonWrapper>
    </StyledOrderArea>
  ) : (
    <p>Out of stock</p>
  );
};
