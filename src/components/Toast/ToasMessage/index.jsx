import { Container } from './styles';
import xCircleIcon from '../../../assets/images/icons/x-circle.svg';
import CheckCircleIcon from '../../../assets/images/icons/check-circle.svg';

export default function ToastMessage({ message, onRemoveMessage }) {
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
