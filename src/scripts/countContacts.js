import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    const contacts = await readContacts();
    return contacts.length;
  } catch (error) {
    console.error('Помилка підрахунку контактів: ', error);
  }
};

console.log(await countContacts());
