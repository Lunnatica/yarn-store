import styled from 'styled-components';

import { getTextStyles } from '../../theme/typography';
import { visuallyHidden } from '../StyledVisuallyHiddenComponents';

export const StyledUserMessage = styled.p<{
  visible: boolean;
  type: 'error' | 'info';
}>`
  /* Visually hide the component while keeping it in the DOM */
  ${visuallyHidden}

  /* Show the component if it has content */
  ${({ visible }) => visible && 'position: static;'}

  ${getTextStyles(600, '24px', '24px')}
  padding: 24px;
  border-radius: 8px;
  text-align: center;
  margin: 80px auto;
  width: 75%;
  color: ${({ type }) => (type === 'error' ? 'var(--colors-blank)' : 'var(--colors-darkBlue)')};
  background-color: ${({ type }) =>
    type === 'error' ? 'var(--colors-error)' : 'var(--colors-ghostWhite)'};
`;
