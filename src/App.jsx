import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import { Container } from './AppStyles';
import ToastContainer from './components/Toast/ToastContainer';

function App() {
  return (
    <>
      <Container>
        <Header />
        <Outlet />
      </Container>
      <ToastContainer />
    </>
  );
}

export default App;
