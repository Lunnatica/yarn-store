import styled from 'styled-components';

export const visuallyHidden = `
  position: absolute;
  clip: rect(0, 0, 0, 0);
`;

export const StyledVisuallyHiddenLabel = styled.label`
  ${visuallyHidden}
`;

export const StyledVisuallyHiddenH2 = styled.h2`
  ${visuallyHidden}
`;
