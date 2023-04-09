import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/actions';

import css from './ContactForm.module.css';

export default function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  //-----------------------------------------------------------------------------------------------
  const onSubmitFunction = event => {
    event.preventDefault();
    dispatch(addContact({ name: name, number: number }));
    setName('');
    setNumber('');
  };
  //-----------------------------------------------------------------------------------------------

  return (
    <form id="contactForm" name="contactForm" onSubmit={onSubmitFunction}>
      <fieldset className={css.contact_form}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={event => {
            setName(event.currentTarget.value);
          }}
          value={name}
        />
        <label htmlFor="tel">Number</label>
        <input
          type="tel"
          id="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={event => {
            setNumber(event.currentTarget.value);
          }}
          value={number}
        />
        <button
          id="addContact"
          name="addContact"
          value="addContact"
          type="submit"
        >
          add contact
        </button>
      </fieldset>
    </form>
  );
}
