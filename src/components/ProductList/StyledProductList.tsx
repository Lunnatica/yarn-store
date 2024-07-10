import styled from 'styled-components';

export const StyledProductList = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, 298px);
  padding: 137px 10%;
  gap: 30px;
  justify-content: center;
  align-items: start;
  background-color: var(--colors-ghostWhite);
`;
