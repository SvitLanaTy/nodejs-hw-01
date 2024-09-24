import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  try {
    const contacts = await readContacts();
    contacts.push(createFakeContact());
    await writeContacts(contacts);
    console.log('Контакт успішно додано.');
  } catch (error) {
    console.error(
      'Помилка генерації контакту та додавання даних до файлу:',
      error,
    );
  }
};

addOneContact();
