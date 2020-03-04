import React, { useState, useEffect } from 'react';
import ContactList from './components/ContactList';
import { ContactData } from '../types/contact.types';
import SearchBar from './components/SearchBar';

// const contacts: ContactData[] = require('./../data/contacts.json').results;

const sleep = (m: any) => new Promise(r => setTimeout(r, m));

const Part2 = () => {
  const [inputValue, setInputValue] = useState('');
  const [contacts, setContacts] = useState<ContactData[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const doFetch = async (amount: number) => {
    try {
      setLoading(true);
      await sleep(1000);
      const res = await fetch(`https://randomuser.me/api/?results=${amount}`);
      const json = await res.json();
      const results = json.results;
      setContacts(state => [...state, ...results]);
    } catch (error) {
      setError(`We have an ${error}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    doFetch(5);
  }, []);

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
          doFetch={doFetch}
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
