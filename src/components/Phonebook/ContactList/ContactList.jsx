import css from './ContactList.module.css';

import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from '../../../redux/selectors';
import { delContact } from 'redux/actions';

export default function ContactList() {
  const dataList = useSelector(getContacts);
  const dispatch = useDispatch();

  const del = event => {
    console.log(event.target.value);
    dispatch(delContact(event.target.value));
  };
  //================================================================================
  return (
    <ul className={css.contactList}>
      {dataList.map(item => {
        return (
          <li key={item.id} className={css.contactList__item}>
            <span className="contactList__itemName">{item.name}</span>
            <span className="contactList__itemTel">{item.number}</span>

            <button
              className={css.contactList__button}
              key={`btn_${item.id}`}
              type="button"
              name={`button${item.id}`}
              value={item.id}
              onClick={del}
            >
              delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}
