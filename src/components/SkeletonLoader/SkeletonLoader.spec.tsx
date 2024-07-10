import { render } from '@testing-library/react';
import { SkeletonLoader } from './SkeletonLoader';

describe('SkeletonLoader', () => {
  it('should match the snapshot', () => {
    const { container } = render(<SkeletonLoader />);
    expect(container).toMatchSnapshot();
  });
});
