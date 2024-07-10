import { StyledUserMessage } from './StyledUserMessage';

interface UserMessageProps {
  className?: string;
  message?: string;
  type?: 'error' | 'info';
}

export const UserMessage: React.FC<UserMessageProps> = ({
  className,
  message = '',
  type = 'info',
}) => (
  <StyledUserMessage
    className={className}
    visible={message !== ''}
    type={type}
    aria-live={type === 'error' ? 'assertive' : 'polite'}
  >
    {message}
  </StyledUserMessage>
);
