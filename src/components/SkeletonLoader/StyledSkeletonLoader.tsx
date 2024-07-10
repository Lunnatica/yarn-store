import styled, { keyframes } from 'styled-components';

// Keyframe for shimmer animation
const shimmerAnimation = keyframes`
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
`;

export const StyledSkeletonItem = styled.div`
  max-width: 298px;
  border-radius: 10px;
  height: 432px;
  background-color: #e0e0e0;

  /* Shimmer effect */
  background-image: linear-gradient(to right, #e0e0e0 0%, #f0f0f0 50%, #e0e0e0 100%);
  background-size: 800px 100%;
  animation: ${shimmerAnimation} 1.5s infinite linear;
`;
