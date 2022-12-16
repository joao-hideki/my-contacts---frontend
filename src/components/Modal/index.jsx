import { Container, Overlay } from './styles';
import Button from '../Button';
import ReactPortal from '../ReactPortal';

export default function Modal({
  danger,
  title,
  children,
  cancelLabel = 'Cancelar',
  confirmLabel = 'Confirmar',
  onCancel,
  onConfirm,
  isOpen,
  isLoading = false,
}) {
  if (!isOpen) return null;

  return (
    <ReactPortal containerId="modal-root">
      <Overlay>
        <Container danger={danger}>
          <h1>{title}</h1>
          <div>{children}</div>
          <footer>
            <button
              className="cancel-button"
              type="button"
              onClick={onCancel}
              disabled={isLoading}
            >
              {cancelLabel}
            </button>
            <Button
              type="button"
              danger
              onClick={onConfirm}
              isLoading={isLoading}
            >
              {confirmLabel}
            </Button>
          </footer>
        </Container>
      </Overlay>
    </ReactPortal>
  );
}
