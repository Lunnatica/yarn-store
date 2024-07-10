import styled from 'styled-components';
import { getTextStyles } from '../../theme/typography';

const StyledWrapper = styled.header`
  color: var(--colors-blank);
  background-image: linear-gradient(227.4deg, #5240cb -3.02%, #3c2e92 79.84%);
  padding: 100px 0;
  height: 75vh;
  display: flex;
  align-items: center;
`;

const StyledContentContainer = styled.div`
  width: 954px;
  padding: 0 20px;
  margin-left: auto;
  margin-right: auto;
  box-sizing: content-box;
`;

const StyledTitle = styled.p`
  ${getTextStyles(600, '80px', 1)}
`;

const StyledDescription = styled.h1`
  color: var(--colors-spindle);
  ${getTextStyles(400, '18px', '28px')}
  max-width: 477px;
  letter-spacing: 2%;
`;

export { StyledContentContainer, StyledWrapper, StyledTitle, StyledDescription };
