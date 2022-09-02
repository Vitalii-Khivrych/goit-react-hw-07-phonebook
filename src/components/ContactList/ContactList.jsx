import { ContactItem } from '../ContactItem/ContactItem';
import { List, Item } from './ContactList.styled';

import { useGetContactsQuery } from 'redux/contactsSlice';

export function ContactList() {
  const { data: contacts } = useGetContactsQuery();

  // const contacts = useSelector(getContactsItems);
  // const filter = useSelector(getFilter);
  // const dispatch = useDispatch();

  // const renderContacts = () =>
  //   contacts.filter(({ name }) =>
  //     name.toLowerCase().includes(filter.toLowerCase())
  //   );

  return (
    <List>
      {contacts &&
        contacts.map(({ id, name, number }) => (
          <Item key={id}>
            <ContactItem id={id} name={name} number={number} />
          </Item>
        ))}
    </List>
  );
}
