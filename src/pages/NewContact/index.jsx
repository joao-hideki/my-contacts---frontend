import {} from './styles';
import { PageHeader } from '../../components/PageHeader';
import { ContactForm } from '../../components/ContactForm.js';

export function NewContact() {
  return (
    <>
      <PageHeader title="Novo Contato" />
      <ContactForm buttonLabel="Cadastrar" />
    </>
  );
}
