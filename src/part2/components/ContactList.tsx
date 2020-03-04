import React, { Fragment } from 'react';
import { ContactData } from '../../types/contact.types';
import Contact from './Contact';

interface Props {
  contacts: ContactData[];
  doFetch: (x: number) => Promise<void>;
}

const ContactList = ({ contacts, doFetch }: Props) => {
  const loadMoreHandler = () => {
    doFetch(3);
  };

  return (
    <Fragment>
      <ul style={styles.list}>
        {contacts.map((contact: ContactData) => (
          <Contact key={contact.login.uuid} contact={contact} />
        ))}
      </ul>
      <button onClick={loadMoreHandler}>Load More</button>
    </Fragment>
  );
};

const styles = {
  list: {
    padding: 0
  }
};

export default ContactList;
