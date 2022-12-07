import { useState } from 'react';
import { FormGroup } from '../FormGroup';
import { Form } from './styles';
import Input from '../Input';
import Select from '../Select';
import Button from '../Button';
import isEmailValid from '../../utils/isEmailValid';
import formatPhone from '../../utils/formatPhone';
import useErrors from '../../hooks/useErrors';

export function ContactForm({ buttonLabel }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('');
  const {
    setError,
    removeError,
    getErrorMessageByFielName,
    errors,
  } = useErrors();

  const isFormValid = (name && errors.length === 0);

  function handleSubmit(e) {
    e.preventDefault();
    console.log({
      name, email, phone, category,
    });
  }

  function handleNameChange(e) {
    setName(e.target.value);

    if (!e.target.value) {
      setError({ field: 'name', message: 'Nome é obrigatório' });
    } else {
      removeError('name');
    }
  }

  function handlePhoneChange(e) {
    setPhone(formatPhone(e.target.value));
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);

    if (e.target.value && !isEmailValid(e.target.value)) {
      setError({ field: 'email', message: 'Email Inválido' });
    } else {
      removeError('email');
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup error={getErrorMessageByFielName('name')}>
        <Input
          placeholder="Nome *"
          value={name}
          onChange={handleNameChange}
          error={getErrorMessageByFielName('name')}
        />
      </FormGroup>

      <FormGroup error={getErrorMessageByFielName('email')}>
        <Input
          placeholder="Email"
          type="email"
          value={email}
          onChange={handleEmailChange}
          error={getErrorMessageByFielName('email')}
        />
      </FormGroup>

      <FormGroup>
        <Input
          placeholder="Telefone"
          value={phone}
          onChange={handlePhoneChange}
          maxLength="15"
        />
      </FormGroup>

      <FormGroup>
        <Select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Categoria</option>
          <option value="instagram">Instagram</option>
          <option value="discord">Discord</option>
        </Select>
      </FormGroup>

      <div>
        <Button type="submit" disabled={!isFormValid}>{buttonLabel}</Button>
      </div>
    </Form>
  );
}
