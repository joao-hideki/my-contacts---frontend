import { FormGroup } from '../FormGroup';
import { Form } from './styles';
import Input from '../Input';
import Select from '../Select';
import Button from '../Button';

export function ContactForm({ buttonLabel }) {
  return (
    <Form>
      <FormGroup>
        <Input placeholder="Nome" />
      </FormGroup>

      <FormGroup
        error="O formato do email é inválido"
      >
        <Input placeholder="Email" error />
      </FormGroup>

      <FormGroup>
        <Input placeholder="Telefone" />
      </FormGroup>

      <FormGroup>
        <Select>
          <option>Instagram</option>
          <option>Linkedin</option>
        </Select>
      </FormGroup>

      <div>
        <Button type="submit">{buttonLabel}</Button>
      </div>
    </Form>
  );
}
