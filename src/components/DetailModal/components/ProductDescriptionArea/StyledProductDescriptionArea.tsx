import styled from 'styled-components';

import { breakpoints } from '../../../../theme/breakpoints';
import { getTextStyles } from '../../../../theme/typography';

export const StyledProductDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media ${breakpoints.desktop} {
    flex-direction: row;
  }

  > * {
    flex: 1;
  }
`;

export const StyledTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  ${getTextStyles(400, '16px', '24px')}

  ul {
    margin-left: 16px;
  }
`;

export const StyledProductDetailLineWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const StyledProductDetailLine = styled.p`
  ${getTextStyles(500, '14px', '16.94px')}
`;

export const StyledProductDetailLineTitle = styled.span`
  color: var(--colors-bayoux);
`;
