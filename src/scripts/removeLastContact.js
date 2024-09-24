import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const contacts = await readContacts();
    if (contacts.length > 0) {
      contacts.pop();
      await writeContacts(contacts);
      console.log('Останній контакт успішно видалено.');
    } else {
      console.log('Контактів не знайдено.');
    }
  } catch (error) {
    console.error('Помилка під час видалення останнього контакту: ', error);
  }
};

removeLastContact();
