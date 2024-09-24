import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    const allContacts = await readContacts();
    return allContacts || 'Жодних контактів не знайдено.';
  } catch (error) {
    console.error('Помилка:', error);
  }
};

console.log(await getAllContacts());
