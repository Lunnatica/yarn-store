import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  padding: 15px;
  border-radius: 6px;
  background-color: var(--colors-blank);
  position: absolute;
  top: 71%;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  max-width: 632px;
  height: 70px;
`;

export const StyledSearchField = styled.input`
  flex-grow: 1;
  border: none;
  background: none;
  padding: 11px;
  font-size: inherit;
  font-family: inherit;
  line-height: inherit;
`;

export const StyledIconWrapper = styled.div`
  display: inline-flex;
  flex-shrink: 0;
  color: var(--colors-irisBlue);
  border: none;
  background: none;
  padding: 8px;
`;
