import { render, screen } from '@testing-library/react';

import { mockProducts } from '../../test/mocks';
import { DetailModal } from './DetailModal';

jest.mock('../../icons/close.svg', () => ({
  __esModule: true,
  default: () => 'test-icon',
}));

describe('DetailModal', () => {
  it('should render the DetailModal component', () => {
    render(<DetailModal product={mockProducts[0]} isOpen={true} onDismiss={() => undefined} />);

    expect(screen.getByText(mockProducts[0].name));
    expect(screen.getByText(mockProducts[0].description[0].text));
    expect(screen.getByText(mockProducts[0].description[1].text));
    expect(screen.getByText(mockProducts[0].description[2].text));
    expect(screen.getByText(mockProducts[0].description[3].text));
  });
});
