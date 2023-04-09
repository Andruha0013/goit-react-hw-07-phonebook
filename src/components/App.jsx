import React from 'react';

import ContactForm from './Phonebook/ContactForm/ContactForm';
import Filter from './Phonebook/Filter/Filter';
import ContactList from './Phonebook/ContactList/ContactList';
import css from './Phonebook.module.css';

export default function App() {
  //-----------------------------------------------------------------------------------
  return (
    <div className={css.phoneBook}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}
