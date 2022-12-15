import { useRef } from 'react';
import PageHeader from '../../components/PageHeader';
import ContactForm from '../../components/ContactForm';
import ContactsService from '../../services/ContactsService';
import toast from '../../utils/toast';

export function NewContact() {
  const contactFormRef = useRef(null);

  async function handleSubmit(newContactData) {
    try {
      const newContact = {
        name: newContactData.name,
        email: newContactData.email,
        phone: newContactData.phone,
        category_id: newContactData.categoryId,
      };

      await ContactsService.createContact(newContact);

      contactFormRef.current.resetFieldsValues();

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
        ref={contactFormRef}
        buttonLabel="Cadastrar"
        onSubmit={handleSubmit}
      />
    </>
  );
}
