import {} from './styles';
import { PageHeader } from '../../components/PageHeader';
import { ContactForm } from '../../components/ContactForm.js';
import ContactsService from '../../services/ContactsService';

export function NewContact() {
  async function handleSubmit(newContactData) {
    try {
      const newContact = {
        name: newContactData.name,
        email: newContactData.email,
        phone: newContactData.phone,
        // category_id: newContactData.categoryId,
      };
      if (newContactData.categoryId !== '') {
        // adicionar newContactData.categoryId no objeto newContact
      }
      const response = await ContactsService.createContacts(newContact);
      console.log(response);
    } catch {}
  }

  return (
    <>
      <PageHeader title="Novo Contato" />
      <ContactForm
        buttonLabel="Cadastrar"
        onSubmit={handleSubmit}
      />
    </>
  );
}
