import { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ContactForm from '../../components/ContactForm';
import PageHeader from '../../components/PageHeader';
import ContactsService from '../../services/ContactsService';
import Loader from '../../components/Loader';
import toast from '../../utils/toast';
import useIsMounted from '../../hooks/useIsMounted';

export function EditContact() {
  const [isLoading, setIsLoading] = useState(true);
  const [contactName, setContactName] = useState('');
  const contactFormRef = useRef(null);

  const { id } = useParams();
  const navigate = useNavigate();
  const isMounted = useIsMounted();

  useEffect(() => {
    async function loadContact() {
      try {
        setIsLoading(true);
        const contact = await ContactsService.getContactById(id);

        if (isMounted()) {
          contactFormRef.current.setFieldsValues(contact);
          setContactName(contact.name);

          setIsLoading(false);
        }
      } catch {
        if (isMounted()) {
          navigate('/');
          toast({
            type: 'danger',
            text: 'Contato não encontrado',
          });
        }
      }
    }

    loadContact();
  }, [id, navigate, isMounted]);

  async function handleSubmit(editedContactData) {
    try {
      const editedContact = {
        name: editedContactData.name,
        email: editedContactData.email,
        phone: editedContactData.phone,
        category_id: editedContactData.categoryId,
      };

      const updatedContact = await ContactsService.updateContact(id, editedContact);

      setContactName(updatedContact.name);

      toast({
        type: 'success',
        text: 'Contato editado com sucesso!',
      });
    } catch {
      toast({
        type: 'danger',
        text: 'Ocorreu um erro ao editar o contato!',
      });
    }
  }

  return (
    <>
      <Loader isLoading={isLoading} />
      <PageHeader
        title={isLoading ? 'Carregando...' : `Editar ${contactName}`}
      />
      <ContactForm
        ref={contactFormRef}
        buttonLabel="Salvar Alterações"
        onSubmit={handleSubmit}
      />
    </>
  );
}
