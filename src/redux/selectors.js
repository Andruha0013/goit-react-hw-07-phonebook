export const getContacts = state => {
  //console.log(state);
  let y = [];
  if (state.filter !== null && state.filter !== '') {
    y = state.contacts.filter(contact => {
      if (
        contact.name.toLocaleLowerCase().includes(state.filter.toLowerCase())
      ) {
        return contact;
      } else {
        return false;
      }
    });
  } else {
    y = state.contacts;
  }
  //console.log(y);
  return y;
};

export const getFilter = state => state.filter;
