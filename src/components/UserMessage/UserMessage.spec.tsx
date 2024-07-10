import { render, screen } from '@testing-library/react';
import { UserMessage } from './UserMessage';

describe('UserMessage', () => {
  it('should render the message', () => {
    render(<UserMessage message="Test message" />);
    const message = screen.getByText('Test message');
    expect(message);
  });

  it('should match the snapshot for error message', () => {
    const { container } = render(<UserMessage message="Error message" type="error" />);
    expect(container).toMatchSnapshot();
  });

  it('should match the snapshot for info message', () => {
    const { container } = render(<UserMessage message="Info message" type="info" />);
    expect(container).toMatchSnapshot();
  });
});
