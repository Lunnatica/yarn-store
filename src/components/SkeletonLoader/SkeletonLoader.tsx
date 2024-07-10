import { StyledSkeletonItem } from './StyledSkeletonLoader';

const SKELETON_ITEMS = 6;

export const SkeletonLoader: React.FC = () => {
  return (
    <>
      {Array.from({ length: SKELETON_ITEMS }).map((_, index) => (
        <StyledSkeletonItem key={index} />
      ))}
    </>
  );
};
