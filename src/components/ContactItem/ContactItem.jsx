import PropTypes from 'prop-types';

import { useDeleteContactMutation } from 'redux/contacts/contactsSlice';
import { Text, Button } from './ContactItem.styled';
import { LoaderDelete } from 'components';

export function ContactItem({ name, number, id }) {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  return (
    <>
      <Text>
        {name}: {number}{' '}
      </Text>
      <Button
        type="button"
        disabled={isLoading}
        onClick={() => deleteContact(id)}
      >
        {isLoading ? <LoaderDelete /> : 'Delete'}
      </Button>
    </>
  );
}

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
