import {
  Card, Container, Header, ListContainer,
} from './styles';
import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';

export function ContactsList() {
  return (
    <Container>
      <Header>
        <strong>X contatos</strong>
        <a href="/">Novo contato</a>
      </Header>
      <ListContainer>
        <header>
          <button type="button">
            <span>Nome</span>
            <img src={arrow} alt="top arrow" />
          </button>
        </header>
        <Card>
          <div className="info">
            <div>
              <strong>João Hideki</strong>
              <small>Instagram</small>
            </div>
            <span>joao@email.com</span>
            <span>(11) 99999-9999</span>
          </div>
          <div className="actions">
            <a href="/">
              <img src={edit} alt="edit" />
            </a>
            <button type="button">
              <img src={trash} alt="trash" />
            </button>
          </div>
        </Card>
        <Card>
          <div className="info">
            <div>
              <strong>João Hideki</strong>
              <small>Instagram</small>
            </div>
            <span>joao@email.com</span>
            <span>(11) 99999-9999</span>
          </div>
          <div className="actions">
            <a href="/">
              <img src={edit} alt="edit" />
            </a>
            <button type="button">
              <img src={trash} alt="trash" />
            </button>
          </div>
        </Card>
        <Card>
          <div className="info">
            <div>
              <strong>João Hideki</strong>
              <small>Instagram</small>
            </div>
            <span>joao@email.com</span>
            <span>(11) 99999-9999</span>
          </div>
          <div className="actions">
            <a href="/">
              <img src={edit} alt="edit" />
            </a>
            <button type="button">
              <img src={trash} alt="trash" />
            </button>
          </div>
        </Card>
      </ListContainer>
    </Container>
  );
}
