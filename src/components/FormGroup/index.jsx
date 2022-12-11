import { Container } from './styles';
import Spinner from '../Spinner';

export function FormGroup({ children, error, isLoading }) {
  return (
    <Container>
      <div>
        {children}
        {isLoading && (
          <div className="loader">
            <Spinner size={16} />
          </div>
        )}
      </div>
      {error && <small>{error}</small>}
    </Container>
  );
}
