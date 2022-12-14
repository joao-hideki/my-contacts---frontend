import { useEffect } from 'react';
import { Container } from './styles';
import xCircleIcon from '../../../assets/images/icons/x-circle.svg';
import CheckCircleIcon from '../../../assets/images/icons/check-circle.svg';

export default function ToastMessage({ message, onRemoveMessage }) {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onRemoveMessage(message.id);
    }, (message.duration || 7000));

    return () => clearTimeout(timeoutId);
  }, [onRemoveMessage, message]);

  function handleRemoveToast() {
    onRemoveMessage(message.id);
  }

  return (
    <Container type={message.type} onClick={handleRemoveToast}>
      <strong>
        {message.type === 'danger' && <img src={xCircleIcon} alt="X" />}
        {message.type === 'success' && <img src={CheckCircleIcon} alt="check" />}
        {message.text}
      </strong>
    </Container>
  );
}
