import { createPortal } from 'react-dom';
import { Container, Overlay } from './styles';
import Button from '../Button';

export function Modal({ danger }) {
  return createPortal(
    <Overlay>
      <Container danger={danger}>
        <h1>título do modal</h1>
        <p>corpo do modal</p>
        <footer>
          <button className="cancel-button" type="button">Cancelar</button>
          <Button type="button" danger>Deletar</Button>
        </footer>
      </Container>
    </Overlay>,
    document.getElementById('modal-root'),
  );
}
