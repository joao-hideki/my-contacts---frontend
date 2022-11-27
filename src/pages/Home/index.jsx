import { Container } from './styles';
import { Header } from '../../components/Header';
import { ContactsList } from '../../components/Contact';

export function Home() {
  return (
    <Container>
      <Header />
      <ContactsList />
    </Container>
  );
}
