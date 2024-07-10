import { render } from '@testing-library/react';

import { Hero } from './Hero';

describe('Hero', () => {
  it('should match the snapshot', () => {
    const { container } = render(<Hero />);
    expect(container).toMatchSnapshot();
  });
});
