import React, { useState } from 'react';
import ContactList from './components/ContactList';
import { ContactData } from '../types/contact.types';
import SearchBar from './components/SearchBar';

import { useFetch } from './hooks/useFetch';

const Part2 = () => {
  const [inputValue, setInputValue] = useState('');
  const [contacts, setContacts] = useState<ContactData[]>([]);

  const { response, loading, error } = useFetch(
    'https://randomuser.me/api/?results=5'
  );

  if (contacts.length === 0 && response?.results?.length > 1) {
    setContacts(response.results);
  }

  const filteredContacts =
    inputValue.length > 0
      ? contacts.filter((contact: ContactData) => {
          const { title, first, last } = contact.name;

          const fullName = title.concat(' ', first, ' ', last);

          return fullName.toLowerCase().includes(inputValue.toLowerCase());
        })
      : contacts;

  return (
    <>
      <h1 style={styles.titleStyle}>My contacts</h1>
      <SearchBar inputValue={inputValue} setInputValue={setInputValue} />
      <div style={styles.container}>
        <ContactList
          contacts={filteredContacts}
          loading={loading}
          error={error}
        />
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

export default Part2;
