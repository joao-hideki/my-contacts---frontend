import { Link } from 'react-router-dom';
import {
  Card, Container, Header, ListContainer, InputSearchContainer,
} from './styles';
import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';
import { Loader } from '../../components/Loader';
// import { Modal } from '../../components/Modal';

export function Home() {
  return (
    <Container>
      {/* <Modal danger /> */}
      <Loader />
      <InputSearchContainer>
        <input
          type="text"
          placeholder="Pesquisar contato"
        />
      </InputSearchContainer>
      <Header>
        <strong>X contatos</strong>
        <Link to="/new">Novo contato</Link>
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
            <Link to="/edit/1">
              <img src={edit} alt="edit" />
            </Link>
            <button type="button">
              <img src={trash} alt="trash" />
            </button>
          </div>
        </Card>
      </ListContainer>
    </Container>
  );
}
