import styled from 'styled-components';

import { getTextStyles } from '../../../../theme/typography';
import { UserMessage } from '../../../UserMessage';

export const StyledOrderArea = styled.form`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 40px;
`;

export const StyledInputsAreaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 30px;
  }
`;

export const StyledInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;

export const StyledUserInputTitle = styled.p`
  ${getTextStyles(400, '12px', '14px')}
  color: var(--colors-bayoux);
`;

const inputStyles = `
  color: var(--colors-darkBlue);
  height: 100%;
  width: 100%;
  max-width: 325px;
  border: none;
  border-bottom: 2px solid var(--colors-heather);
  padding: 6px 1px;`;

export const StyledStockInput = styled.input`
  /* Hide number input arrows */
  /* Chrome, Safari, Edge, Opera */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  appearance: textfield;
  /* End hide number input arrows */

  ${inputStyles}
  ${getTextStyles(500, '16px', '24px')}
`;

export const StyledSelect = styled.select`
  ${inputStyles}
  ${getTextStyles(500, '16px', '24px')}
  cursor: pointer;
`;

export const StyledStockLabel = styled.label`
  ${getTextStyles(400, '12px', '14px')}
  color: var(--colors-lynch);
`;

export const StyledOrderButton = styled.button`
  ${getTextStyles(500, '16px', '24px')}
  background-color: var(--colors-irisBlue);
  color: var(--colors-blank);
  border-radius: 45px;
  padding: 10px 24px;
  cursor: pointer;
  border: none;
  max-width: 136px;

  :focus,
  :hover {
    outline: solid var(--colors-darkBlue);
  }

  :disabled {
    background-color: var(--colors-heather);
    cursor: not-allowed;
  }
`;

export const StyledOrderButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;

    > * {
      flex-grow: 0;
      flex-basis: 50%;
    }
  }
`;

export const StyledUserMessage = styled(UserMessage)`
  margin: 0;
  width: 100%;
  background-color: var(--colors-blank);
  padding: 0;
  font-size: 16px;
`;
