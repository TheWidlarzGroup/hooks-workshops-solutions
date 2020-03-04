import React, { useState } from 'react';
import ContactList from './components/ContactList';
import { ContactData } from '../types/contact.types';
import SearchBar from './components/SearchBar';

import { useFetch } from './hooks/useFetch';

const Part4 = () => {
  const [inputValue, setInputValue] = useState('');
  const [contacts, setContacts] = useState<ContactData[]>([]);

  const { response, loading, error } = useFetch(
    'https://randomuser.me/api/?results=500'
  );

  if (contacts.length === 0 && response?.results?.length > 1) {
    setContacts(response.results);
  }

  return (
    <>
      <h1 style={styles.titleStyle}>My contacts</h1>
      <SearchBar
        inputValue={inputValue}
        setInputValue={setInputValue}
        contacts={contacts}
      />
      <div style={styles.container}>
        <ContactList contacts={contacts} loading={loading} error={error} />
      </div>
    </>
  );
};

const styles = {
  titleStyle: {
    textAlign: 'center' as 'center'
  },
  container: {
    width: '100%',
    maxWidth: 900,
    margin: '0 auto'
  }
};

export default Part4;
