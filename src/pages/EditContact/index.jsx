import { ContactForm } from '../../components/ContactForm.js';
import { PageHeader } from '../../components/PageHeader';
import {} from './styles';

export function EditContact() {
  return (
    <>
      <PageHeader title="Editar João Hideki" />
      <ContactForm buttonLabel="Salvar Alterações" />
    </>
  );
}
