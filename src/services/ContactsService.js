import HttpClient from './utils/HttpClient';

class ContactsServices {
  constructor() {
    this.httpClient = new HttpClient('http://localhost:3001');
  }

  listContacts(orderBy = 'asc') {
    return this.httpClient.get(`/contacts/?orderBy=${orderBy}`, {
      headers: {
        Authorization: '#meutokens',
      },
    });
  }

  getContactById(id) {
    return this.httpClient.get(`/contacts/${id}`);
  }

  createContacts(newContactData) {
    return this.httpClient.post('/contacts', {
      body: newContactData,
    });
  }
}

export default new ContactsServices();
