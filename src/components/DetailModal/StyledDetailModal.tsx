import styled from 'styled-components';

import { DialogContent, DialogOverlay } from '@reach/dialog';

import { screenSizes } from '../../theme/breakpoints';
import { getTextStyles } from '../../theme/typography';

export const StyledDetailDialogOverlay = styled(DialogOverlay)`
  background-color: rgba(0, 0, 0, 0.3);
  height: 100%;

  // Make the dialog overlay full screen on mobile and tablet
  @media (max-width: ${screenSizes.tablet}) {
    > * {
      padding: 0 16px;
      width: 100%;
    }
  }
`;

export const StyledDetailDialogContent = styled(DialogContent)`
  box-shadow: 0px 6px 20px 0px #00000026;
  border-radius: 10px;
  padding: 60px;
`;

export const StyledTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`;

export const StyledButtonWrapper = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  cursor: pointer;
`;

export const StyledProductTitle = styled.h3`
  ${getTextStyles(500, '26px', '32px')}
`;
