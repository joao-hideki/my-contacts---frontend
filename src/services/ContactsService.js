import HttpClient from './utils/HttpClient';

class ContactsServices {
  constructor() {
    this.httpClient = new HttpClient('http://localhost:3001');
  }

  async listContacts(orderBy = 'asc') {
    return this.httpClient.get(`/contacts/?orderBy=${orderBy}`);
  }

  async createContacts(newContactData) {
    return this.httpClient.post('/contacts', newContactData);
  }
}

export default new ContactsServices();
