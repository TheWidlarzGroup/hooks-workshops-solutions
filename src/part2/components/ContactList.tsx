import React, { Fragment } from 'react';
import { ContactData } from '../../types/contact.types';
import Contact from './Contact';
import { useFetch } from '../hooks/useFetch';

interface Props {
  contacts: ContactData[];
  loading: boolean;
  error: string;
}

const ContactList = ({ contacts, loading, error }: Props) => {
  const loadMoreHandler = () => {
    //doFetch(3)
  };

  return (
    <Fragment>
      {error && <div style={styles.errorDiv}>{error}</div>}
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
  },
  errorDiv: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'red',
    width: '100%',
    height: 100
  }
};

export default ContactList;
