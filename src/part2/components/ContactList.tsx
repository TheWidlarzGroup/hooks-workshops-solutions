import React, { Fragment } from 'react';
import { ContactData } from '../../types/contact.types';
import Contact from './Contact';

interface Props {
  contacts: ContactData[];
  doFetch: (x: number) => Promise<void>;
  loading: boolean;
}

const ContactList = ({ contacts, doFetch, loading }: Props) => {
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
      {loading && <div style={styles.loadingDiv}>loading...</div>}
      <button onClick={loadMoreHandler}>Load More</button>
    </Fragment>
  );
};

const styles = {
  list: {
    padding: 0
  },
  loadingDiv: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'blue',
    width: '100%',
    height: 50
  }
};

export default ContactList;
