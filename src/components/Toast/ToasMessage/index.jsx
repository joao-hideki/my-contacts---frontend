import { Container } from './styles';
import xCircleIcon from '../../../assets/images/icons/x-circle.svg';
import CheckCircleIcon from '../../../assets/images/icons/check-circle.svg';

export default function ToastMessage({ text, type = 'default' }) {
  return (
    <Container type={type}>
      <strong>
        {type === 'danger' && <img src={xCircleIcon} alt="X" />}
        {type === 'success' && <img src={CheckCircleIcon} alt="check" />}
        {text}
      </strong>
    </Container>
  );
}
