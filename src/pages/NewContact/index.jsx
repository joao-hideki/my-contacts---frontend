import {} from './styles';
import { PageHeader } from '../../components/PageHeader';
import { ContactForm } from '../../components/ContactForm.js';
import ContactsService from '../../services/ContactsService';
import toast from '../../utils/toast';

export function NewContact() {
  async function handleSubmit(newContactData) {
    try {
      const newContact = {
        name: newContactData.name,
        email: newContactData.email,
        phone: newContactData.phone,
        category_id: newContactData.categoryId,
      };

      await ContactsService.createContacts(newContact);

      toast({
        type: 'success',
        text: 'Contato cadastrado com sucesso!',
      });
    } catch {
      toast({
        type: 'danger',
        text: 'Ocorreu um erro ao cadastrar o contato!',
      });
    }
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
