import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
    await writeContacts([]);
    console.log('Контакти успішно видалено.');
  } catch (error) {
    console.error('Помилка під час видалення контактів:', error);
  }
};

removeAllContacts();
