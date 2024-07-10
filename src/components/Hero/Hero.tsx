import {
  StyledContentContainer,
  StyledDescription,
  StyledTitle,
  StyledWrapper,
} from './StyledHero';

export const Hero: React.FC = () => {
  return (
    <StyledWrapper>
      <StyledContentContainer>
        <StyledTitle>Yarn Store</StyledTitle>
        <StyledDescription>
          Order your favorite products made using our unique yarn colors that everyone loves!
        </StyledDescription>
      </StyledContentContainer>
    </StyledWrapper>
  );
};
