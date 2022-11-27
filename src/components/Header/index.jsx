import { Container } from './styles';
import logo from '../../assets/images/logo.svg';

export function Header() {
  return (
    <Container>
      <img src={logo} alt="MyContacts" width={201} />
      <div>
        <input
          type="text"
          placeholder="Pesquisar contato"
        />
      </div>
    </Container>
  );
}
