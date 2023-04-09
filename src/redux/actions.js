import { nanoid } from 'nanoid';

export const addContact = contact => {
  return {
    type: 'contacts/addContact',
    payload: {
      id: nanoid(),
      name: contact.name,
      number: contact.number,
    },
  };
};

export const delContact = id => {
  return {
    type: 'contacts/delContact',
    payload: id,
  };
};
//------------------------------------------
export const setFilter = str => {
  return {
    type: 'filter/setFilter',
    payload: str,
  };
};
