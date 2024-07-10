import Image from 'next/image';
import styled from 'styled-components';
import { getTextStyles } from '../../theme/typography';

export const StyledProductCardArticle = styled.article`
  height: 100%;
  list-style-type: none;
  max-width: 298px;
  display: flex;
  flex-direction: column;
`;

export const StyledProductCardLi = styled.li`
  height: 100%;
`;

export const StyledClickableCard = styled.button`
  background-color: var(--colors-blank);
  border: none;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  position: relative;
  box-shadow: 2.55px 2.55px 25.45px 0px #00234b1a;
  height: 100%;

  :hover {
    box-shadow: 2.55px 8.55px 30px 0px #00234b26;
  }
`;

export const StyledImage = styled(Image)`
  border-radius: 10px 10px 0 0;
  width: 100%;
  height: 100%;
`;

export const StyledProductInfo = styled.div`
  padding: 16px 24px 24px 24px;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
`;

export const StyledProductTitle = styled.h3`
  color: var(--colors-darkBlue);
  ${getTextStyles(600, '18px', '21.78px')}
  margin: 0;
  padding: 16px 0;
`;

export const StyledProductDetailLine = styled.p`
  ${getTextStyles(500, '14px', '16.94px')}
  margin: 0;
  padding: 4px 0;
`;

export const StyledProductDetailLineTitle = styled.span`
  color: var(--colors-bayoux);
`;

export const StyledNewTag = styled.p`
  position: absolute;
  top: 286px;
  left: 34px;
  width: 50px;
  border-radius: 25px;
  height: 22.4px;
  ${getTextStyles(400, '12px', '16px')}
  color: var(--colors-blank);
  background-color: var(--colors-irisBlue);
  padding: 0px 12px;
  align-content: center;
`;
